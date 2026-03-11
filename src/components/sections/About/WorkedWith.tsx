import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
        <motion.ul variants={fadeInUp} className="list-disc list-inside">
          {items.map((item) => (
            <motion.li variants={fadeInUp} key={item}>{item}</motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default AboutWorkedWithSection;
