import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import PageMotion from "@/components/sections/NordicSpain/PageMotion";
import NordicSpainHeroSection from "@/components/sections/NordicSpain/Hero";
import NordicSpainProblemSection from "@/components/sections/NordicSpain/Problem";
import NordicSpainServicesSection from "@/components/sections/NordicSpain/Services";
import NordicSpainLegalSideSection from "@/components/sections/NordicSpain/LegalSide";
import NordicSpainWhyMeSection from "@/components/sections/NordicSpain/WhyMe";
import NordicSpainProofSection from "@/components/sections/NordicSpain/Proof";
import NordicSpainFaqSection from "@/components/sections/NordicSpain/Faq";
import NordicSpainClosingCtaSection from "@/components/sections/NordicSpain/ClosingCta";
import {
  defaultNordicSpainLocale,
  isNordicSpainLocale,
  nordicSpainLocales,
} from "./locales";

const baseUrl = process.env.SITE_URL;
const path = "/nordic-spain";

export function generateStaticParams() {
  return nordicSpainLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const activeLocale = isNordicSpainLocale(locale)
    ? locale
    : defaultNordicSpainLocale;

  const t = await getTranslations({
    locale: activeLocale,
    namespace: "nordicSpain.meta",
  });

  // `path` already starts with "/", so no separator between it and the locale.
  const canonical = `${baseUrl}/${activeLocale}${path}`;
  const ogImage = `${baseUrl}/me-working2.webp`;

  // Only locales that actually have copy are advertised, so search engines are
  // not pointed at redirects.
  const languages = Object.fromEntries(
    nordicSpainLocales.map((loc) => [loc, `${baseUrl}/${loc}${path}`]),
  );

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Spanish digital compliance",
      "Ley 11/2023",
      "European Accessibility Act",
      "WCAG 2.2 AA",
      "LSSI-CE",
      "LOPDGDD",
      "RGPD",
      "Nordic companies Spain",
      "Spanish market launch",
      "web accessibility Spain",
    ],
    authors: [{ name: "Åsa Eriksson", url: baseUrl }],
    creator: "Åsa Eriksson",
    publisher: "Åsa Eriksson",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      locale: activeLocale,
      url: canonical,
      title: t("title"),
      description: t("description"),
      siteName: "Asa Eriksson",
      images: [{ url: ogImage, alt: t("ogAlt"), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
  };
}

const NordicSpainPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  // Serving English copy under <html lang="sv"> would fail WCAG 3.1.1, so
  // locales without copy go to the one that has it. See ./locales.ts.
  if (!isNordicSpainLocale(locale)) {
    redirect(`/${defaultNordicSpainLocale}${path}`);
  }

  setRequestLocale(locale);

  return (
    <PageMotion>
      {/* The locale layout has no <main>, so this page provides its own. */}
      <main
        id="main-content"
        className="relative container max-w-full pb-16 pt-[64px]"
      >
        <NordicSpainHeroSection />
        <NordicSpainProblemSection />
        <NordicSpainServicesSection />
        <NordicSpainLegalSideSection />
        <NordicSpainWhyMeSection />
        <NordicSpainProofSection />
        <NordicSpainFaqSection />
        <NordicSpainClosingCtaSection />
      </main>
    </PageMotion>
  );
};

export default NordicSpainPage;
