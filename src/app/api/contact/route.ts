import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  normaliseUrl,
  validate,
  type SubmissionValues,
} from "@/lib/contactForm";

/** nodemailer opens a TCP socket, so this cannot run on the edge runtime. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REQUIRED_ENV = [
  "ZOHO_SMTP_HOST",
  "ZOHO_SMTP_PORT",
  "ZOHO_SMTP_USER",
  "ZOHO_SMTP_PASS",
  "CONTACT_TO",
] as const;

const asString = (value: unknown): string =>
  typeof value === "string" ? value : "";

/**
 * Logs why a send failed without ever touching the submission.
 * SMTP error messages can echo envelope addresses, so only codes are logged.
 */
const logFailure = (stage: string, error: unknown) => {
  const { code, responseCode } = (error ?? {}) as {
    code?: string;
    responseCode?: number;
  };
  console.error(
    `contact: ${stage} failed`,
    `code=${code ?? "UNKNOWN"}`,
    `responseCode=${responseCode ?? "none"}`,
  );
};

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  // Honeypot: a bot filled in the field no human can see. Answer 200 so it
  // learns nothing, and send nothing.
  if (asString(body.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const values: SubmissionValues = {
    name: asString(body.name),
    email: asString(body.email),
    company: asString(body.company),
    url: asString(body.url),
    message: asString(body.message),
  };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    console.error(
      "contact: missing SMTP configuration:",
      missingEnv.join(", "),
    );
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const port = Number(process.env.ZOHO_SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0) {
    console.error("contact: ZOHO_SMTP_PORT is not a valid port number");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port,
    // Zoho: 465 is implicit TLS, 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });

  const site = values.url.trim()
    ? (normaliseUrl(values.url) ?? values.url.trim())
    : "";

  const lines = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.company.trim() ? `Company: ${values.company.trim()}` : null,
    site ? `Website: ${site}` : null,
    "",
    values.message.trim(),
  ].filter((line) => line !== null);

  try {
    await transporter.sendMail({
      // From is CONTACT_TO as specified. Zoho only accepts this if
      // CONTACT_TO is a mailbox on the authenticated account.
      from: `"Website contact form" <${process.env.CONTACT_TO}>`,
      to: process.env.CONTACT_TO,
      replyTo: `"${values.name.trim()}" <${values.email.trim()}>`,
      subject: site
        ? `Contact form — ${values.name.trim()} — ${site}`
        : `Contact form — ${values.name.trim()}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    logFailure("send", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  // Nothing is stored: no database, no file, no log of the submission.
  return NextResponse.json({ ok: true });
}
