"use client";
import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutBackgroundSection = () => {
  const t = useTranslations("about.background");

  const descriptions = [
    "description2",
    "description3",
    "description4",
    "description5",
  ];

  return (
    <section id="background-section" className="scroll-mt-64">
      <motion.div
          className="space-y-4"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>

          <motion.h6 variants={fadeInUp}>
            {t("description")}
          </motion.h6>
          {descriptions.map((item) => (
          <motion.h6 variants={fadeInUp} key={item}>
            {t.rich(item, {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
            </motion.h6>
          ))}
        </motion.div>
    </section>
  );
};

export default AboutBackgroundSection;
