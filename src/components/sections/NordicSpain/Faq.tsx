"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { bodyText, prose, sectionHeading, sectionSpacing, subHeading } from "./styles";

const FAQ_KEYS = [
  "existingSite",
  "small",
  "outsideBarcelona",
  "notNordic",
] as const;

/**
 * Four short questions, rendered open rather than as a collapsible accordion.
 *
 * A disclosure widget would add state, ARIA and keyboard handling for no gain
 * here: the answers are two sentences each, they all fit, and leaving them in
 * the page means they are readable by everyone without interaction and
 * indexable as text. Questions are real <h3>s so they appear in the heading
 * outline that screen reader users navigate by.
 */
const NordicSpainFaqSection = () => {
  const t = useTranslations("nordicSpain.faq");

  return (
    <section id="faq" aria-labelledby="faq-heading" className={sectionSpacing}>
      <motion.div
        className={cn(prose, "mx-auto space-y-8")}
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2
          id="faq-heading"
          variants={fadeInUp}
          className={sectionHeading}
        >
          {t("title")}
        </motion.h2>

        {FAQ_KEYS.map((key) => (
          <motion.div key={key} variants={fadeInUp} className="space-y-2">
            <h3 className={subHeading}>{t(`items.${key}.question`)}</h3>
            <p className={bodyText}>{t(`items.${key}.answer`)}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NordicSpainFaqSection;
