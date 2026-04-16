import PortfolioHeroSection from "@/components/sections/Portfolio/Hero";
import PortfolioCard from "@/components/sections/Portfolio/PortfolioCard";
import { portfolioItems } from "./portfolioProjects";

const PortfolioPage = () => {
  return (
    <div
      id="portfolio"
      className="relative container max-w-full pt-[64px] pb-16"
    >
      <PortfolioHeroSection />
      <div id="works-section" className="mt-8 md:mt-12 py-8 space-y-4">
        <h3>Latest projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
