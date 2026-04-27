"use client";
import PortfolioHeroSection from "@/components/sections/Portfolio/Hero";
import PortfolioCard from "@/components/sections/Portfolio/PortfolioCard";
import { portfolioItems } from "./portfolioProjects";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import CtaSection from "@/components/sections/CtaSection";
import { useTranslations } from "next-intl";

const PortfolioPage = () => {
  const t = useTranslations("portfolio.cta");
  return (
    <div
      id="portfolio"
      className="relative container max-w-full pt-[64px] pb-16"
    >
      <PortfolioHeroSection />
      <section id="works-section" className="mt-8 md:mt-12 py-8 scroll-mt-64">
        <motion.div
          className="space-y-4"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>Latest projects</motion.h3>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {portfolioItems.map((item) => (
              <motion.div key={item.slug} variants={fadeInUp}>
                <PortfolioCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <CtaSection
        title={t("title")}
        description={t("description")}
        buttonText={t("buttonText")}
        buttonHref="/contact"
      />
    </div>
  );
};

export default PortfolioPage;
