import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = "https://asaeriksson.com";

const staticPaths = [
  "",
  "/about",
  "/portfolio",
  "/blog",
  "/services",
  "/contact",
  "/cookies-policy",
  "/privacy-policy",
  "/legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const url =
        path === "" ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [
              loc,
              path === "" ? `${baseUrl}/${loc}` : `${baseUrl}/${loc}${path}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
