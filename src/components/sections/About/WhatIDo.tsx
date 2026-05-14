"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import { useTranslations } from "next-intl";
import ListSection from "@/components/sections/ListSection";

const AboutWhatIDoSection = () => {
  const t = useTranslations("about.whatIDo");

  const frontendDev = [
    t("react"),
    t("nextjs"),
    t("typescript"),
    t("modernCssArchitectures"),
    t("performanceOptimization"),
  ];

  const productDesign = [
    t("uiDesignSystems"),
    t("uxFlows"),
    t("responsiveDesign"),
    t("accessibilityUsability"),
  ];

  return (
    <section id="what-i-do-section">
      <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>

        <motion.h6 variants={fadeInUp}>{t("description")}</motion.h6>

        <motion.h6 variants={fadeInUp}>{t("workFocus")}</motion.h6>

        <ListSection title={t("fontendDev")} subTitle={t("fastBuilding")} listItems={frontendDev} />

        <ListSection title={t("productDesign")} subTitle={t("intuitiveDesign")} listItems={productDesign} />

        <motion.h4 variants={fadeInUp}>
          {t("designDrivenDevelopment")}
        </motion.h4>
        <motion.h6 variants={fadeInUp}>
          {t.rich("designDrivenDevelopmentDescription", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </motion.h6>
      </motion.div>
    </section>
  );
};

export default AboutWhatIDoSection;
