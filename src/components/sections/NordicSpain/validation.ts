/**
 * Validation rules for the compliance-check request form.
 *
 * Shared by the client component and the route handler so the two cannot
 * drift. The client runs it to render accessible inline errors; the server
 * runs it again because client-side validation is a convenience, not a
 * control.
 */

export const MAX_LENGTHS = {
  url: 2000,
  name: 100,
  email: 200,
  company: 200,
  message: 5000,
} as const;

export const REPORT_LANGUAGES = ["sv", "en", "es"] as const;
export type ReportLanguage = (typeof REPORT_LANGUAGES)[number];

export type FieldName = keyof typeof MAX_LENGTHS;

export type ErrorCode =
  | "urlRequired"
  | "urlInvalid"
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "tooLong";

export interface SubmissionValues {
  url: string;
  name: string;
  email: string;
  company: string;
  message: string;
  language: string;
}

export type FieldErrors = Partial<Record<FieldName, ErrorCode>>;

/** Field order, used to render the error summary in visual order. */
export const FIELD_ORDER: FieldName[] = [
  "url",
  "name",
  "email",
  "company",
  "message",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Accepts input with or without a scheme ("example.es", "www.example.es",
 * "https://example.es") and returns a normalised absolute URL, or null if it
 * cannot be read as a web address.
 */
export const normaliseUrl = (raw: string): string | null => {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withScheme);
    // A bare word like "intranet" parses fine but is not a public site.
    if (!parsed.hostname.includes(".")) return null;
    return parsed.toString();
  } catch {
    return null;
  }
};

export const validate = (values: SubmissionValues): FieldErrors => {
  const errors: FieldErrors = {};

  const url = values.url.trim();
  if (!url) {
    errors.url = "urlRequired";
  } else if (url.length > MAX_LENGTHS.url) {
    errors.url = "tooLong";
  } else if (!normaliseUrl(url)) {
    errors.url = "urlInvalid";
  }

  const name = values.name.trim();
  if (!name) {
    errors.name = "nameRequired";
  } else if (name.length > MAX_LENGTHS.name) {
    errors.name = "tooLong";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "emailRequired";
  } else if (email.length > MAX_LENGTHS.email) {
    errors.email = "tooLong";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "emailInvalid";
  }

  if (values.company.trim().length > MAX_LENGTHS.company) {
    errors.company = "tooLong";
  }

  if (values.message.trim().length > MAX_LENGTHS.message) {
    errors.message = "tooLong";
  }

  return errors;
};

export const isReportLanguage = (value: string): value is ReportLanguage =>
  (REPORT_LANGUAGES as readonly string[]).includes(value);
