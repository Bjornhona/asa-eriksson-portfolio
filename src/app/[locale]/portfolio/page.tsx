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
      tags: ["Next.js", "HTML", "Tailwind CSS", "Shadcn UI", "Figma", "Lemon Squeezy"],
    },
    {
      title: t("sculptedGoddess.title"),
      description: t("sculptedGoddess.description"),
      image: "/portfolio/sculpted-goddess/1.png",
      alt: t("sculptedGoddess.alt"),
      caseStudyUrl: "/portfolio/sculpted-goddess",
      visitSiteUrl: "https://sculpted-goddess.vercel.app",
      tags: ["Next.js", "TypeScript", "SCSS", "libSQL", "API integration"],
    },
    {
      title: t("cgConsulting.title"),
      description: t("cgConsulting.description"),
      image: "/portfolio/cg-consulting/1.png",
      alt: t("cgConsulting.alt"),
      caseStudyUrl: "/portfolio/cg-consulting",
      visitSiteUrl: "https://cg-consulting.es",
      tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <div className="relative container max-w-full pt-[64px] pb-16">
      <PortfolioHeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
