import type { NavMenuProps } from "../../../packages/ui/types";

/** Nav config with translation keys; AppNavbar resolves labels via useTranslations */
export type NavMenuConfig = Omit<NavMenuProps, "locale" | "onLocaleChange" | "navLinks"> & {
  navLinks: { labelKey: string; href: string }[];
};

export const navMenu: NavMenuConfig = {
  languages: ["en", "sv", "es"],
  modeSwitch: true,
  navLinks: [
    { labelKey: "common.home", href: "/" },
    { labelKey: "common.about", href: "/about" },
    { labelKey: "common.services", href: "/services" },
    { labelKey: "common.portfolio", href: "/portfolio" },
    { labelKey: "common.blog", href: "/blog" },
    { labelKey: "common.contact", href: "/contact" },
  ],
};
