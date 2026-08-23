/**
 * Validation rules for the /contact form.
 *
 * Shared by the client component and the route handler so the two cannot
 * drift. The client runs it to render accessible inline errors; the server
 * runs it again because client-side validation is a convenience, not a
 * control.
 *
 * The form serves both general enquiries and Spanish-compliance enquiries
 * arriving from /nordic-spain, so the website field is optional — a recruiter
 * has no URL to give, and a compliance enquiry does.
 */

export const MAX_LENGTHS = {
  url: 2000,
  name: 100,
  email: 200,
  company: 200,
  message: 5000,
} as const;

export type FieldName = keyof typeof MAX_LENGTHS;

export type ErrorCode =
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "urlInvalid"
  | "messageRequired"
  | "tooLong";

export interface SubmissionValues {
  name: string;
  email: string;
  company: string;
  url: string;
  message: string;
}

export type FieldErrors = Partial<Record<FieldName, ErrorCode>>;

/** Visual order, so the error summary lists problems the way they appear. */
export const FIELD_ORDER: FieldName[] = [
  "name",
  "email",
  "company",
  "url",
  "message",
];

export const EMPTY_SUBMISSION: SubmissionValues = {
  name: "",
  email: "",
  company: "",
  url: "",
  message: "",
};

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

  // Optional, but must be readable as a web address if given.
  const url = values.url.trim();
  if (url) {
    if (url.length > MAX_LENGTHS.url) {
      errors.url = "tooLong";
    } else if (!normaliseUrl(url)) {
      errors.url = "urlInvalid";
    }
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = "messageRequired";
  } else if (message.length > MAX_LENGTHS.message) {
    errors.message = "tooLong";
  }

  return errors;
};
