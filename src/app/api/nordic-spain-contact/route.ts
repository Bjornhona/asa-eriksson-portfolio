import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  isReportLanguage,
  normaliseUrl,
  validate,
  type SubmissionValues,
} from "@/components/sections/NordicSpain/validation";

/** nodemailer opens a TCP socket, so this cannot run on the edge runtime. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
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
    `nordic-spain-contact: ${stage} failed`,
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
    url: asString(body.url),
    name: asString(body.name),
    email: asString(body.email),
    company: asString(body.company),
    message: asString(body.message),
    language: asString(body.language),
  };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    console.error(
      "nordic-spain-contact: missing SMTP configuration:",
      missingEnv.join(", "),
    );
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const port = Number(process.env.SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0) {
    console.error("nordic-spain-contact: SMTP_PORT is not a valid port number");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    // Zoho: 465 is implicit TLS, 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const siteUrl = normaliseUrl(values.url) ?? values.url.trim();
  const language = isReportLanguage(values.language) ? values.language : "en";

  const lines = [
    `Site: ${siteUrl}`,
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.company.trim() ? `Company: ${values.company.trim()}` : null,
    `Preferred report language: ${language}`,
    "",
    values.message.trim() || "(no message)",
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      // Zoho rejects a From that is not the authenticated mailbox, so the
      // sender is always us and the visitor goes in Reply-To.
      from: `"Nordic Spain form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: `"${values.name.trim()}" <${values.email.trim()}>`,
      subject: `Compliance check request — ${siteUrl}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    logFailure("send", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  // Nothing is stored: no database, no file, no log of the submission.
  return NextResponse.json({ ok: true });
}
