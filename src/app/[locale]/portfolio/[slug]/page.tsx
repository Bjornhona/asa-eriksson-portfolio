import HeroSection, {
  ButtonsProps,
} from "@/components/HeroSection/HeroSection";
import { Github, Globe, MailIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { portfolioItems } from "../portfolioProjects";
import { PortfolioItem } from "../portfolioProjects";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import ProjectDataSection from "@/components/sections/Portfolio/ProjectData";
import PortfolioTimeline from "@/components/sections/Portfolio/Timeline";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Portfolio Detail | Asa Eriksson",
  description: "Portfolio Detail | Asa Eriksson",
  keywords: ["Portfolio Detail", "Asa Eriksson"],
  authors: [{ name: "Asa Eriksson", url: "https://asaeriksson.com" }],
  creator: "Asa Eriksson",
  publisher: "Asa Eriksson",
  openGraph: {
    title: "Portfolio Detail | Asa Eriksson",
    description: "Portfolio Detail | Asa Eriksson",
  },
};

const PortfolioDetailPage = async ({ params }: { params: { slug: string } }) => {
  const t = await getTranslations(`portfolio.work`);
  
  const { slug } = await params;
  if (!slug) {
    notFound()
  }

  const project: PortfolioItem | undefined = portfolioItems.find((project) => project.slug === slug);
  if (!project) {
    notFound();
  }

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

  const buttons: ButtonsProps[] = project.githubRepoName ? [
    ...baseButtons,
    {
      href: `https://github.com/bjornhona/${project.githubRepoName}`,
      icon: <Github className="w-4 h-4" />,
      label: t("hero.github"),
    },
  ] : baseButtons;

  return (
    <div id="portfolio-details" className="relative container max-w-full pt-[64px] pb-32">
      <HeroSection
        imageSrc={project.images[0]}
        imageAlt={t(project.text + ".alt")}
        title={t(project.text + ".title")}
        subtitle={t(project.text + ".hero.subtitle")}
        texts={[t(project.text + ".hero.description")]}
        buttons={buttons}
      />
      <ProjectDataSection project={project} />
      <PortfolioTimeline project={project} />
      <CtaSection
        id="portfolio-cta-section"
        title={t(project.text + ".finalCta.title")}
        buttonText={t(project.text + ".finalCta.cta")}
        buttonHref="/contact"
      />
    </div>
  );
};

export default PortfolioDetailPage;
