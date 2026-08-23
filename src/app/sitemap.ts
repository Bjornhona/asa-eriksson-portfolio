import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { portfolioItems } from "./[locale]/portfolio/portfolioProjects";
import { nordicSpainLocales } from "./[locale]/nordic-spain/locales";

const baseUrl = "https://asaeriksson.com";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/cookies-policy",
  "/privacy-policy",
  "/legal-notice",
];

const getLocalizedUrl = (locale: string, path: string) =>
  path === "" ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}${path}`;

const getAlternates = (path: string) =>
  Object.fromEntries(locales.map((locale) => [locale, getLocalizedUrl(locale, path)]));

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: getAlternates(path),
        },
      });
    }

    for (const project of portfolioItems) {
      const path = `/portfolio/${project.slug}`;

      entries.push({
        url: getLocalizedUrl(locale, path),
        lastModified: new Date(project.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: getAlternates(path),
        },
      });
    }
  }

  // /nordic-spain is listed separately because it only exists in the locales
  // that have copy for it — listing it per-locale would advertise redirects.
  const nordicSpainPath = "/nordic-spain";
  const nordicSpainAlternates = Object.fromEntries(
    nordicSpainLocales.map((locale) => [
      locale,
      getLocalizedUrl(locale, nordicSpainPath),
    ]),
  );

  for (const locale of nordicSpainLocales) {
    entries.push({
      url: getLocalizedUrl(locale, nordicSpainPath),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: nordicSpainAlternates,
      },
    });
  }

  return entries;
}
