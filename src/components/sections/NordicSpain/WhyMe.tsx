"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";
import { bodyText, sectionHeading, sectionSpacing } from "./styles";

const NordicSpainWhyMeSection = () => {
  const t = useTranslations("nordicSpain.whyMe");

  return (
    <section
      id="why-me"
      aria-labelledby="why-me-heading"
      className={sectionSpacing}
    >
      <motion.div
        className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="max-w-md space-y-4">
          <motion.h2
            id="why-me-heading"
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
          <motion.p variants={fadeInUp} className={bodyText}>
            {t("p4")}
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          className={cn(
            "order-first aspect-square w-40 shrink-0 overflow-hidden rounded-full",
            "sm:w-48 md:order-none md:w-56 lg:w-64",
          )}
        >
          <BlendImageFilter
            src="/Me.jpg"
            alt={t("portraitAlt")}
            width={400}
            height={400}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NordicSpainWhyMeSection;
