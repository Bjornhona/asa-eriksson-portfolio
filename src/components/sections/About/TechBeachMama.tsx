import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutTechBeachMamaSection = () => {
  const t = useTranslations("about.techBeachMama");

  return (
    <section id="tech-beach-mama-section">
      <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <motion.h6 variants={fadeInUp}>{t.rich("description", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}</motion.h6>
        <motion.h6 variants={fadeInUp}>{t("description2")}</motion.h6>
        <motion.h6 variants={fadeInUp}>{t.rich("linkText", {
          a: (chunks) => (
            <a href="https://techbeachmama.com" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
        })}</motion.h6>
      </motion.div>
      {/* <motion.p variants={fadeInUp}>
        {t.rich("home.techbeachmama", {
          a: (chunks) => (
            <a
              href="https://techbeachmama.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </a>
          ),
        })}
      </motion.p> */}
    </section>
  );
};

export default AboutTechBeachMamaSection;
