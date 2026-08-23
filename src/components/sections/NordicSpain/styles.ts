/**
 * Shared class fragments for the Nordic Spain page.
 *
 * `focusRing` exists because the shared Button applies
 * `focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`,
 * but no `ring` colour is defined in tailwind.config.ts — so `ring-ring` is
 * never compiled and `outline-none` lands unopposed, leaving no visible focus
 * indicator (WCAG 2.4.7). Every interactive element on this page opts back in
 * with a real outline. tailwind-merge resolves it over `outline-none`.
 *
 * aqua-400 measures 14.95:1 against the dark background.
 */
export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400";

/** Section heading (h2) — matches the site's visual scale without borrowing
 *  its habit of using a lower heading level to get a smaller size. */
export const sectionHeading =
  "font-prompt font-semibold text-title text-2xl sm:text-3xl leading-normal";

/** Sub-heading (h3) inside a section. */
export const subHeading =
  "font-prompt font-semibold text-title text-lg md:text-xl leading-normal";

/** Body copy. The global `p` rule is 12px (14px ≥768px), which is too small to
 *  defend on a page that sells accessibility. */
export const bodyText = "text-base md:text-lg text-foreground leading-bold";

/** Comfortable measure for prose (~70 characters). max-w-md is 640px here —
 *  this project remaps Tailwind's max-width scale onto its own tokens. */
export const prose = "max-w-md";

/** Vertical rhythm between page sections. */
export const sectionSpacing = "scroll-mt-24 py-12 md:py-16";
