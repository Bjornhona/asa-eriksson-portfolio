"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cardContainer, container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import TierCard from "./TierCard";
import { sectionHeading, sectionSpacing } from "./styles";

/** Source order from the copy. The AI tier sits below the €6,000 launch tier
 *  deliberately — it is a different category, not a step down the ladder. */
const TIER_KEYS = [
  "scan",
  "report",
  "remediation",
  "launch",
  "ai",
  "ongoing",
] as const;

const NordicSpainServicesSection = () => {
  const t = useTranslations("nordicSpain.services");

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      /* The hero's "See what I check" link moves focus here, so this needs to
         be programmatically focusable. scroll-mt (in sectionSpacing) keeps the
         heading clear of the header — WCAG 2.4.11 Focus Not Obscured. */
      tabIndex={-1}
      className={cn(
        sectionSpacing,
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-400",
      )}
    >
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          id="services-heading"
          variants={fadeInUp}
          className={cn(sectionHeading, "max-w-md")}
        >
          {t("title")}
        </motion.h2>
      </motion.div>

      <motion.ul
        className="mt-8 grid list-none grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        variants={cardContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TIER_KEYS.map((key) => {
          const note = t(`tiers.${key}.note`);

          return (
            <li key={key} className="h-full">
              <TierCard
                headingId={`tier-${key}`}
                price={t(`tiers.${key}.price`)}
                name={t(`tiers.${key}.name`)}
                body={t(`tiers.${key}.body`)}
                note={note || undefined}
              />
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default NordicSpainServicesSection;
