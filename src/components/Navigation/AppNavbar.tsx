"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname as useNextPathname } from "next/navigation";
import { getPathname } from "@/i18n/navigation";
import { locales, defaultLocale } from "@/i18n/config";
import { Navbar,  } from "@/ui";
import { navMenu } from "./navMenu";
import { Logo } from "@/ui";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { NavLinkProps } from "@/ui/types";

/** Strip locale prefix from pathname to get internal path (e.g. /en/about → /about) */
function getPathnameWithoutLocale(fullPath: string): string {
  const segments = fullPath.split("/").filter(Boolean);
  if (
    segments.length > 0 &&
    (locales as readonly string[]).includes(segments[0])
  ) {
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
  const localeFromPath =
    pathSegments[0] && (locales as readonly string[]).includes(pathSegments[0])
      ? pathSegments[0]
      : defaultLocale;
  const locale = localeFromPath;
  const t = useTranslations();

  const onLocaleChange = (newLocale: string) => {
    const newPath = getPathname({ href: pathname, locale: newLocale });
    router.replace(newPath);
  };

  const navLinks: NavLinkProps[] = navMenu.navLinks.map((link) => ({
    label: t(link.labelKey),
    href: link.href,
    icon: link.icon,
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
    >
      <div className="flex flex-row items-center gap-2">
        <Logo
          logoSrc={"/logo-dark.svg"}
          logoDarkModeSrc={"/logo-light.svg"}
          logoAlt={"Åsa Eriksson logo"}
        />
        <motion.h5 className="mt-2" variants={fadeInUp}>
          Åsa Eriksson
        </motion.h5>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
