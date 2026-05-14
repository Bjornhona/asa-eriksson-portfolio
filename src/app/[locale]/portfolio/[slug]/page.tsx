import HeroSection, {
  ButtonsProps,
} from "@/components/HeroSection/HeroSection";
import { Github, Globe, MailIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { portfolioItems } from "../portfolioProjects";
import { PortfolioItem } from "../portfolioProjects";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import ProjectDataSection from "@/components/sections/Portfolio/ProjectData";
import PortfolioTimeline from "@/components/sections/Portfolio/Timeline";
import CtaSection from "@/components/sections/CtaSection";
import BackButton from "@/components/BackButton/BackButton";

const baseUrl = "https://asaeriksson.com";

export async function generateStaticParams() {
  return portfolioItems.flatMap((project) =>
    locales.map((locale) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) return {};

  const t = await getTranslations({
    locale,
    namespace: "portfolio.work",
  });

  const projectTitle = t(`${project.text}.title`);
  const description = t(`${project.text}.description`);
  const alt = t(`${project.text}.alt`);

  const path = `/portfolio/${slug}`;
  const canonical = `${baseUrl}/${locale}${path}`;
  const ogImage = `${baseUrl}${project.images.hero}`;

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${baseUrl}/${loc}${path}`]),
  );

  const fullTitle = `${projectTitle} | Portfolio | Asa Eriksson`;

  return {
    title: fullTitle,
    description,
    keywords: [projectTitle, ...project.tags, "Asa Eriksson", "Portfolio"],
    authors: [{ name: "Asa Eriksson", url: baseUrl }],
    creator: "Asa Eriksson",
    publisher: "Asa Eriksson",
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "article",
      locale,
      url: canonical,
      title: fullTitle,
      description,
      siteName: "Asa Eriksson",
      images: [{ url: ogImage, alt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

const PortfolioDetailPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) => {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const project: PortfolioItem | undefined = portfolioItems.find(
    (project) => project.slug === slug,
  );
  if (!project) {
    notFound();
  }

  const t = await getTranslations(`portfolio.work`);

  const backButton: React.ReactNode = (
    <BackButton href="/portfolio" label={t("backToPortfolio")} />
  );

  const baseButtons: ButtonsProps[] = [
    {
      href: project.visitSiteUrl,
      icon: <Globe className="w-4 h-4" />,
      label: t("hero.viewLive"),
    },
    {
      href: "/contact",
      icon: <MailIcon className="w-4 h-4" />,
      label: t("hero.contactMe"),
    },
  ];

  const buttons: ButtonsProps[] = project.githubRepoName
    ? [
        ...baseButtons,
        {
          href: `https://github.com/bjornhona/${project.githubRepoName}`,
          icon: <Github className="w-4 h-4" />,
          label: t("hero.github"),
        },
      ]
    : baseButtons;

  return (
    <div
      id="portfolio-details"
      className="relative container max-w-full pt-[64px] pb-32"
    >
      <HeroSection
        imageSrc={project.images.hero}
        imageAlt={t(project.text + ".alt")}
        title={t(project.text + ".title")}
        subtitle={t(project.text + ".hero.subtitle")}
        texts={[t(project.text + ".hero.description")]}
        buttons={buttons}
        imageTransitionName={`project-image-${project.slug}`}
      />
      {backButton}
      <ProjectDataSection project={project} />
      <PortfolioTimeline project={project} />
      <CtaSection
        id="portfolio-cta-section"
        description={"portfolio.work." + project.text + ".finalCta.title"}
        buttonText={"portfolio.work." + project.text + ".finalCta.cta"}
        buttonHref="/contact"
      />
      {backButton}
    </div>
  );
};

export default PortfolioDetailPage;
