import { container, fadeInUp } from "@/lib/animations";
import { Button } from "@/ui";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutApproachSection = () => {
  const t = useTranslations("about.approach");

  const coreStack = [
    t("react"),
    t("nextjs"),
    t("typescript"),
    t("modernCss"),
    t("componentBasedDesignSystems"),
    t("restApis"),
    t("performanceOptimization"),
  ];

  const workflow = [
    t("productThinking"),
    t("strongVisualDesign"),
    t("cleanAndScalableCode"),
  ];

  return (
    <section id="approach-section">
      <motion.div
        className="space-y-4 max-w-md mx-auto"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <motion.h6 variants={fadeInUp}>
          {t("description")}
        </motion.h6>

        <motion.h5 variants={fadeInUp}>
          <strong>{t("workflow")}:</strong>
        </motion.h5>
        <motion.ul variants={fadeInUp} className="list-disc list-inside">
          {workflow.map((item) => (
            <motion.li variants={fadeInUp} key={item}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h6 variants={fadeInUp}>
          {t("iFocusOn")}
        </motion.h6>

        <motion.h5 variants={fadeInUp}>
          <strong>{t("myCoreStackIncludes")}:</strong>
        </motion.h5>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          {coreStack.map((item) => (
            <Button variant="glass" className="pointer-events-none" key={item}>
              {item}
            </Button>
          ))}
        </motion.div>

        <motion.h6 variants={fadeInUp}>
          {t("alsoPassionateAbout")}
        </motion.h6>
      </motion.div>
    </section>
  );
};

export default AboutApproachSection;
