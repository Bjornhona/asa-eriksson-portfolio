"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cardContainer, container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Card } from "@/ui";
import { bodyText, prose, sectionHeading, sectionSpacing } from "./styles";

const NordicSpainLegalSideSection = () => {
  const t = useTranslations("nordicSpain.legal");

  return (
    <section
      id="legal"
      aria-labelledby="legal-heading"
      className={sectionSpacing}
    >
      <motion.div
        className={cn(prose, "mx-auto")}
        variants={cardContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card>
          <motion.div
            className="space-y-4"
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              id="legal-heading"
              variants={fadeInUp}
              className={sectionHeading}
            >
              {t("title")}
            </motion.h2>

            <motion.p variants={fadeInUp} className={bodyText}>
              {t("p1")}
            </motion.p>
            <motion.p variants={fadeInUp} className={bodyText}>
              {t("p2")}
            </motion.p>
            <motion.p variants={fadeInUp} className={bodyText}>
              {t("p3")}
            </motion.p>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default NordicSpainLegalSideSection;
