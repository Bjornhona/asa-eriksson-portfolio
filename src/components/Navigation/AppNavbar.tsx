"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname as useNextPathname } from "next/navigation";
import { getPathname } from "@/i18n/navigation";
import { locales, defaultLocale } from "@/i18n/config";
import Navbar from "../../../packages/ui/Navigation/Navbar";
import { navMenu } from "./navMenu";

/** Strip locale prefix from pathname to get internal path (e.g. /en/about → /about) */
function getPathnameWithoutLocale(fullPath: string): string {
  const segments = fullPath.split("/").filter(Boolean);
  if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return fullPath || "/";
}

const AppNavbar = () => {
  const fullPathname = useNextPathname();
  const pathname = getPathnameWithoutLocale(fullPathname);
  const router = useRouter();
  const pathSegments = fullPathname.split("/").filter(Boolean);
  const localeFromPath = pathSegments[0] && (locales as readonly string[]).includes(pathSegments[0])
    ? pathSegments[0]
    : defaultLocale;
  const locale = localeFromPath;
  const t = useTranslations();

  const onLocaleChange = (newLocale: string) => {
    const newPath = getPathname({ href: pathname, locale: newLocale });
    router.replace(newPath);
  };

  const navLinks = navMenu.navLinks.map((link) => ({
    label: t(link.labelKey as Parameters<typeof t>[0]),
    href: link.href,
  }));

  return (
    <Navbar
      logoSrc="/logo-dark.svg"
      logoDarkModeSrc="/logo-light.svg"
      logoAlt="Åsa Eriksson logo"
      logoLink={locale ? `/${locale}` : "/"}
      navMenu={{
        ...navMenu,
        navLinks,
        locale,
        onLocaleChange,
      }}
    />
  );
};

export default AppNavbar;
