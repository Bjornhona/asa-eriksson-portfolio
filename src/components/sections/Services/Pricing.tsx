"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import { useTranslations } from "next-intl";

const ServicesPricingSection = () => {
  const t = useTranslations("services.pricing");
  
  return (
    <section id="pricing-section">
      <motion.div
        className="space-y-4 container max-w-md mx-auto pt-[64px] pb-16"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <motion.h6 variants={fadeInUp}>{t("description")}</motion.h6>

        <motion.h6 variants={fadeInUp}>{t("landingPages")}</motion.h6>
        <motion.h6 variants={fadeInUp}>{t("websites")}</motion.h6>
        <motion.h6 variants={fadeInUp}>{t("customApps")}</motion.h6>
      </motion.div>
    </section>
  );
};

export default ServicesPricingSection;
