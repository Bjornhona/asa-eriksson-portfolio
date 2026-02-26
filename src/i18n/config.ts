export const locales = ["en", "sv", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
