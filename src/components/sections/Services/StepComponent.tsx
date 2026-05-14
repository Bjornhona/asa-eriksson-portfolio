import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const StepComponent = ({title, description}: {title: string, description: string}) => {
  const t = useTranslations("services.process.steps");
  
  return (
    <section id="background-section" className="scroll-mt-64">
    <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t(title)}</motion.h3>

        <motion.h6 variants={fadeInUp}>
          {t(description)}
        </motion.h6>
      </motion.div>
    </section>
  );
};
