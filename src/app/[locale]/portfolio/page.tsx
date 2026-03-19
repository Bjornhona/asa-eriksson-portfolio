import { useTranslations } from "next-intl";
import PortfolioHeroSection from "@/components/sections/Portfolio/Hero";
import PortfolioCard, { PortfolioItem } from "@/components/sections/Portfolio/PortfolioCard";

const PortfolioPage = () => {
  const t = useTranslations("portfolio.work");

  const portfolioItems: PortfolioItem[] = [
    {
      title: t("techBeachMama.title"),
      description: t("techBeachMama.description"),
      image: "/portfolio/tech-beach-mama/1.png",
      alt: t("techBeachMama.alt"),
      caseStudyUrl: "/portfolio/tech-beach-mama",
      visitSiteUrl: "https://techbeachmama.com",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: t("sculptedGoddess.title"),
      description: t("sculptedGoddess.description"),
      image: "/portfolio/sculpted-goddess/1.png",
      alt: t("sculptedGoddess.alt"),
      caseStudyUrl: "/portfolio/sculpted-goddess",
      visitSiteUrl: "https://sculpted-goddess.vercel.app",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: t("cgConsulting.title"),
      description: t("cgConsulting.description"),
      image: "/portfolio/cg-consulting/1.png",
      alt: t("cgConsulting.alt"),
      caseStudyUrl: "/portfolio/cg-consulting",
      visitSiteUrl: "https://cg-consulting.es",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Sanity CMS"],
    },
  ];

  return (
    <div className="relative container max-w-full pt-[64px] pb-16">
      <PortfolioHeroSection />
      {portfolioItems.map((item) => (
        <PortfolioCard key={item.title} item={item} />
      ))}
    </div>
  );
};

export default PortfolioPage;
