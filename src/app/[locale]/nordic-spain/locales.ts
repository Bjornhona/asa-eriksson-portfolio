/**
 * Locales this page has copy for.
 *
 * The page copy lives under the `nordicSpain` namespace in `src/messages/*.json`.
 * Only `en.json` has it today. To add Swedish: translate that namespace into
 * `sv.json` and add "sv" here — nothing else needs to change.
 *
 * Requests for a locale that is not listed redirect to the first one, so the
 * language switcher never lands on a 404 and we never serve English copy under
 * `<html lang="sv">` (which would fail WCAG 3.1.1 Language of Page).
 */
export const nordicSpainLocales = ["en"] as const;

export type NordicSpainLocale = (typeof nordicSpainLocales)[number];

export const defaultNordicSpainLocale: NordicSpainLocale = nordicSpainLocales[0];

export const isNordicSpainLocale = (
  locale: string,
): locale is NordicSpainLocale =>
  (nordicSpainLocales as readonly string[]).includes(locale);
