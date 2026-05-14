"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import { useTranslations } from "next-intl";

const AboutExperienceSection = () => {
  const t = useTranslations("about.experience");
  const experience = new Date().getFullYear() - 2019;

  return (
    <section id="experience-section">
      <motion.div
          className="space-y-4 max-w-md mx-auto"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>
            {t("title")}
          </motion.h3>
          <motion.h6 variants={fadeInUp}>
            {experience + 5}+ {t("graphicDesign")}
            <br />
            {experience}+ {t("frontendDevelopment")}
            <br />
            {experience}+ {t("productDesign")}
            <br />
            {experience}+ {t("designDrivenDevelopment")}
            <br />
            {experience}+ {t("scalableWebApplications")}
            <br />
          </motion.h6>
        </motion.div>
    </section>
  );
};

export default AboutExperienceSection;
