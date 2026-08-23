"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ShieldAlert, Accessibility, Languages } from "lucide-react";
import { cardContainer, container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Card } from "@/ui";
import { bodyText, sectionHeading, sectionSpacing, subHeading } from "./styles";

const PROBLEM_KEYS = ["eu", "accessibility", "localise"] as const;

const PROBLEM_ICONS = {
  eu: ShieldAlert,
  accessibility: Accessibility,
  localise: Languages,
};

const NordicSpainProblemSection = () => {
  const t = useTranslations("nordicSpain.problem");

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className={sectionSpacing}
    >
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          id="problem-heading"
          variants={fadeInUp}
          className={cn(sectionHeading, "max-w-md")}
        >
          {t("title")}
        </motion.h2>
      </motion.div>

      <motion.ul
        className="mt-8 grid list-none grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 md:gap-8"
        variants={cardContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PROBLEM_KEYS.map((key) => {
          const Icon = PROBLEM_ICONS[key];

          return (
            <li key={key} className="h-full">
              <Card>
                <span
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-aqua-400 dark:bg-white/15"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className={cn(subHeading, "mb-2")}>
                  {t(`items.${key}.title`)}
                </h3>
                <p className={cn(bodyText, "text-base")}>
                  {t(`items.${key}.body`)}
                </p>
              </Card>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default NordicSpainProblemSection;
