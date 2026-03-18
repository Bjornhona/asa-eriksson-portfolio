"use client";
import { container, fadeInUp } from "@/lib/animations";
import { Button } from "@/ui";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesWorkSection = () => {
  const t = useTranslations("services.work");
  return (
    <section id="work-section">
      <motion.div
        className="space-y-4 container max-w-md mx-auto pt-[64px] pb-16"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        {/* <motion.h5 variants={fadeInUp}>{t("subtitle")}</motion.h5>
        <motion.h6 variants={fadeInUp}>{t("description")}</motion.h6> */}
        <Button variant="glass" href="/portfolio">
          {t("seeFullPortfolio")}
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesWorkSection;
