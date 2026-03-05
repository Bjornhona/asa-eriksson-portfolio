import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import CursorGlow from "@/components/CursorGlow/CursorGlow";
import AppNavbar from "@/components/Navigation/AppNavbar";
import AppFooter from "@/components/Navigation/AppFooter";
import MistBackground from "@/components/Backgrounds/MistBackground";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative min-h-screen">
        <AppNavbar />
        <MistBackground />
        {children}
        <CursorGlow />
        <AppFooter />
      </div>
    </NextIntlClientProvider>
  );
}
