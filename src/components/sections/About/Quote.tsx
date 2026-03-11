import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutQuoteSection = () => {
  const t = useTranslations("about.quote");

  return (
    <section>
      <motion.div
          className="relative space-y-4 max-w-md mx-auto"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUp}
            className="absolute inset-0 bg-gradient-to-r from-aqua-400 to-blue-500 rounded-lg blur-md opacity-80 z-0"
          />
          <motion.h4
            variants={fadeInUp}
            className="relative italic text-background z-10 p-6"
          >
            &quot;{t("description")}&quot;
          </motion.h4>
        </motion.div>
    </section>
  );
};

export default AboutQuoteSection;
