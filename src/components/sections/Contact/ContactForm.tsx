"use client";
import { useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Button } from "@/ui";
import { Button } from "@/ui/components/button";
import {
  EMPTY_SUBMISSION,
  FIELD_ORDER,
  MAX_LENGTHS,
  validate,
  type FieldErrors,
  type SubmissionValues,
} from "@/lib/contactForm";

type Status = "idle" | "sending" | "success" | "error";

/**
 * The shared Button applies `focus-visible:outline-none` alongside a
 * `focus-visible:ring-ring` that never compiles (no `ring` colour exists in
 * tailwind.config.ts), leaving no visible focus indicator. Everything
 * interactive here opts back in with a real outline — aqua-400 measures
 * 14.95:1 on the dark background.
 */
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400";

const fieldClasses = (invalid: boolean) =>
  cn(
    "w-full rounded-md border bg-white/5 px-3 py-2 text-base text-foreground",
    "placeholder:text-foreground/60 dark:bg-white/[0.07]",
    // white/50 is 5.20:1 against the page background. white/30 measured only
    // 2.68:1, under the 3:1 WCAG 1.4.11 requires for a control boundary.
    invalid ? "border-danger" : "border-white/50",
    focusRing,
  );

const labelClasses = "block text-base font-medium text-title";

const ContactForm = () => {
  const t = useTranslations("contact.form");
  const uid = useId().replace(/:/g, "");

  const [values, setValues] = useState<SubmissionValues>(EMPTY_SUBMISSION);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  /** Anti-spam: a field no human sees. Bots fill it in. */
  const [honeypot, setHoneypot] = useState("");

  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const fieldId = (field: string) => `${uid}-${field}`;
  const errorId = (field: string) => `${uid}-${field}-error`;
  const hintId = (field: string) => `${uid}-${field}-hint`;

  const setValue = (field: keyof SubmissionValues, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      // Focus the summary so the failure is announced and the user lands at
      // the top of the list of problems (WCAG 3.3.1).
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });

      if (!response.ok) throw new Error("request failed");

      setStatus("success");
      setValues(EMPTY_SUBMISSION);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className={cn(
          "rounded-xl border border-aqua-400/40 bg-white/5 p-6 dark:bg-white/[0.07]",
          focusRing,
        )}
      >
        <h3 className="mb-2 flex items-center gap-2 font-prompt text-lg font-semibold text-title md:text-xl">
          <CheckCircle2 className="h-5 w-5 text-aqua-400" aria-hidden="true" />
          {t("successTitle")}
        </h3>
        <p className="text-base text-foreground">{t("successBody")}</p>
      </div>
    );
  }

  const errorEntries = FIELD_ORDER.filter((field) => errors[field]);
  const showSummary = errorEntries.length > 0 || status === "error";

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      {/* role="alert" announces the summary on appearance; tabIndex={-1}
          makes it focusable without adding it to the tab order. */}
      {showSummary ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className={cn(
            "rounded-md border border-danger bg-danger/10 p-4",
            focusRing,
          )}
        >
          <h3 className="mb-2 font-prompt text-lg font-semibold text-title">
            {t("errorSummaryTitle")}
          </h3>

          {status === "error" ? (
            <p className="text-base text-foreground">{t("errors.send")}</p>
          ) : (
            <ul className="list-disc space-y-1 pl-5">
              {errorEntries.map((field) => (
                <li key={field} className="text-base">
                  <a
                    href={`#${fieldId(field)}`}
                    className={cn(
                      "text-link underline underline-offset-4 hover:text-linkHover",
                      focusRing,
                    )}
                    onClick={(event) => {
                      event.preventDefault();
                      document.getElementById(fieldId(field))?.focus();
                    }}
                  >
                    {t(`errors.${errors[field]}`)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}

      <p className="text-base text-foreground/90">{t("intro")}</p>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor={fieldId("name")} className={labelClasses}>
          {t("fields.name.label")}{" "}
          <span className="font-normal text-foreground/90">
            ({t("required")})
          </span>
        </label>
        <input
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          maxLength={MAX_LENGTHS.name}
          value={values.name}
          onChange={(event) => setValue("name", event.target.value)}
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? errorId("name") : undefined}
          className={fieldClasses(!!errors.name)}
        />
        {errors.name ? (
          <p id={errorId("name")} className="text-base text-danger">
            {t(`errors.${errors.name}`)}
          </p>
        ) : null}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor={fieldId("email")} className={labelClasses}>
          {t("fields.email.label")}{" "}
          <span className="font-normal text-foreground/90">
            ({t("required")})
          </span>
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          maxLength={MAX_LENGTHS.email}
          value={values.email}
          onChange={(event) => setValue("email", event.target.value)}
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? errorId("email") : undefined}
          className={fieldClasses(!!errors.email)}
        />
        {errors.email ? (
          <p id={errorId("email")} className="text-base text-danger">
            {t(`errors.${errors.email}`)}
          </p>
        ) : null}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor={fieldId("company")} className={labelClasses}>
          {t("fields.company.label")}{" "}
          <span className="font-normal text-foreground/90">
            ({t("optional")})
          </span>
        </label>
        <input
          id={fieldId("company")}
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={MAX_LENGTHS.company}
          value={values.company}
          onChange={(event) => setValue("company", event.target.value)}
          aria-invalid={errors.company ? true : undefined}
          aria-describedby={errors.company ? errorId("company") : undefined}
          className={fieldClasses(!!errors.company)}
        />
        {errors.company ? (
          <p id={errorId("company")} className="text-base text-danger">
            {t(`errors.${errors.company}`)}
          </p>
        ) : null}
      </div>

      {/* Website — optional, used by Spanish-compliance enquiries */}
      <div className="space-y-2">
        <label htmlFor={fieldId("url")} className={labelClasses}>
          {t("fields.url.label")}{" "}
          <span className="font-normal text-foreground/90">
            ({t("optional")})
          </span>
        </label>
        <p id={hintId("url")} className="text-base text-foreground/90">
          {t("fields.url.hint")}
        </p>
        <input
          id={fieldId("url")}
          name="url"
          type="text"
          inputMode="url"
          autoComplete="url"
          maxLength={MAX_LENGTHS.url}
          value={values.url}
          onChange={(event) => setValue("url", event.target.value)}
          aria-invalid={errors.url ? true : undefined}
          aria-describedby={cn(hintId("url"), errors.url && errorId("url"))}
          className={fieldClasses(!!errors.url)}
        />
        {errors.url ? (
          <p id={errorId("url")} className="text-base text-danger">
            {t(`errors.${errors.url}`)}
          </p>
        ) : null}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor={fieldId("message")} className={labelClasses}>
          {t("fields.message.label")}{" "}
          <span className="font-normal text-foreground/90">
            ({t("required")})
          </span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={6}
          maxLength={MAX_LENGTHS.message}
          value={values.message}
          onChange={(event) => setValue("message", event.target.value)}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errorId("message") : undefined}
          className={fieldClasses(!!errors.message)}
        />
        {errors.message ? (
          <p id={errorId("message")} className="text-base text-danger">
            {t(`errors.${errors.message}`)}
          </p>
        ) : null}
      </div>

      {/* Honeypot. Hidden from sight, from the tab order and from assistive
          technology, so it costs real users nothing — unlike a CAPTCHA. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor={fieldId("website")}>Leave this field empty</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="flex flex-col items-start gap-3">
        {/* aria-disabled rather than disabled: a disabled button drops out of
            the tab order mid-interaction, throwing keyboard users to the top
            of the page. The submit handler guards instead. */}
        {/* <Button type="submit" variant="glass" aria-disabled={status === "sending"}> */}
        <Button
          type="submit"
          variant="glass"
          aria-disabled={status === "sending"}
          // className={cn(
          //   buttonVariants({ variant: "glass" }),
          //   "h-11 px-6 text-base text-foreground",
          //   focusRing,
          //   status === "sending" && "cursor-wait opacity-70",
          // )}
        >
          {status === "sending" ? t("sending") : t("submit")}
        </Button>

        {/* Always present, so the change is announced rather than the arrival. */}
        <p role="status" className="text-base text-foreground/90">
          {status === "sending" ? t("sending") : ""}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
