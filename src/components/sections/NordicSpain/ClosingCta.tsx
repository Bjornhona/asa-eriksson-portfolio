"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import RequestForm from "./RequestForm";
import { bodyText, focusRing, prose, sectionHeading } from "./styles";

const NordicSpainClosingCtaSection = () => {
  const t = useTranslations("nordicSpain.closing");
  const tForm = useTranslations("nordicSpain.form");

  return (
    <section
      id="request-check"
      aria-labelledby="closing-heading"
      /* tabIndex lets the hero CTA move focus here; scroll-mt clears the
         64px header so the heading is not hidden under it (WCAG 2.4.11). */
      tabIndex={-1}
      className={cn(
        prose,
        "mx-auto scroll-mt-24 py-12 md:py-16",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-400",
      )}
    >
      <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2
          id="closing-heading"
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
      </motion.div>

      <div className="mt-8">
        <h3 className="sr-only">{tForm("heading")}</h3>
        <RequestForm />
      </div>

      <p className={cn(bodyText, "mt-8")}>
        {t("emailIntro")}{" "}
        <a
          href={`mailto:${t("email")}`}
          className={cn(
            "rounded-md text-link underline underline-offset-4 hover:text-linkHover",
            focusRing,
          )}
        >
          {t("email")}
        </a>
      </p>
    </section>
  );
};

export default NordicSpainClosingCtaSection;
