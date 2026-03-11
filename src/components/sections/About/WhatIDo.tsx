import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import { useTranslations } from "next-intl";

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
    <section>
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

          <motion.h6 variants={fadeInUp}>
            {t("workFocus")}
          </motion.h6>

          <motion.h4 variants={fadeInUp}>{t("fontendDev")}</motion.h4>
          <motion.h6 variants={fadeInUp}>
            {t("fastBuilding")}
          </motion.h6>
          <motion.ul variants={fadeInUp} className="list-disc list-inside">
            {frontendDev.map((item) => (
              <motion.li variants={fadeInUp} key={item}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 variants={fadeInUp}>{t("productDesign")}</motion.h4>
          <motion.h6 variants={fadeInUp}>
            {t("intuitiveDesign")}
          </motion.h6>
          <motion.ul variants={fadeInUp} className="list-disc list-inside">
            {productDesign.map((item) => (
              <motion.li variants={fadeInUp} key={item}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 variants={fadeInUp}>{t("designDrivenDevelopment")}</motion.h4>
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
