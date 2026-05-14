import PortfolioHeroSection from "@/components/sections/Portfolio/Hero";
import { portfolioItems } from "./portfolioProjects";
import PortfolioContent from "@/components/sections/Portfolio/PortfolioContent";
import CtaSection from "@/components/sections/CtaSection";

const PortfolioPage = () => {
  return (
    <div
      id="portfolio"
      className="relative container max-w-full pt-[64px] pb-16"
    >
      <PortfolioHeroSection />
      <PortfolioContent portfolioItems={portfolioItems} />
      <CtaSection
        title={"portfolio.cta.title"}
        description={"portfolio.cta.description"}
        buttonText={"portfolio.cta.buttonText"}
        buttonHref="/contact"
      />
    </div>
  );
};

export default PortfolioPage;
