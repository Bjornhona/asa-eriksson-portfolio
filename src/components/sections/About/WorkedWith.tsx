import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ListSection from "../ListSection";

const AboutWorkedWithSection = () => {
  const t = useTranslations("about.workedWith");

  const items = [
    t("startups"),
    t("digitalProducts"),
    t("scalableWebApplications"),
    t("designDrivenTeams"),
  ];

  return (
    <section id="worked-with-section">
      <motion.div
        className="space-y-4 max-w-md mx-auto"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <ListSection listItems={items} />
      </motion.div>
    </section>
  );
};

export default AboutWorkedWithSection;
