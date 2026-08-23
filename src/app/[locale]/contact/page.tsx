import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import ContactContent from "@/components/sections/Contact/ContactContent";

const baseUrl = process.env.SITE_URL;
const path = "/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "contact.meta" });

  const canonical = `${baseUrl}/${locale}${path}`;
  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${baseUrl}/${loc}${path}`]),
  );

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      title: t("title"),
      description: t("description"),
      siteName: "Asa Eriksson",
    },
  };
}

const ContactPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    // The locale layout has no <main>, so this page provides its own.
    <main id="main-content" className="relative min-h-screen">
      <ContactContent />
    </main>
  );
};

export default ContactPage;
