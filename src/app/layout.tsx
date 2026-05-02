import { Prompt, Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { getLocale } from "next-intl/server";
import "@/styles/globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asa Eriksson | Frontend Developer & Product Designer | React & Next.js",
  description: "Åsa Eriksson is a frontend engineer specializing in React and Next.js. Building scalable web applications with clean architecture and thoughtful UX. Founder of Tech Beach Mama.",
  keywords: ["Frontend Developer", "Product Designer", "Web Developer", "Web Designer", "Web Development", "Web Design", "UX/UI Designer", "UX/UI Design", "UX/UI Development", "React Developer", "React Designer", "React Development", "React Design", "Next.js Developer", "Next.js Designer", "Next.js Development", "Next.js Design"],
  authors: [{ name: "Åsa Eriksson", url: "https://asaeriksson.com" }],
  creator: "Åsa Eriksson",
  publisher: "Åsa Eriksson",
  openGraph: {
    title: "Asa Eriksson | Frontend Developer & Product Designer | React & Next.js",
    description: "Åsa Eriksson is a frontend engineer specializing in React and Next.js. Building scalable web applications with clean architecture and thoughtful UX. Founder of Tech Beach Mama.",
    images: [{ url: "https://asaeriksson.com/portfolio-home.webp", width: 1200, height: 630, alt: "Åsa Eriksson Portfolio" }],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${prompt.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
