"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/components/button";
import { bodyText, focusRing, prose, sectionHeading } from "./styles";

const NordicSpainClosingCtaSection = () => {
  const t = useTranslations("nordicSpain.closing");

  return (
    <section
      id="closing-cta"
      aria-labelledby="closing-heading"
      className={cn(prose, "mx-auto scroll-mt-24 py-12 md:py-16")}
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

        <motion.div variants={fadeInUp} className="pt-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "glass" }),
              "h-11 px-6 text-base text-foreground",
              focusRing,
            )}
          >
            {t("cta")}
          </Link>
        </motion.div>

        <motion.p variants={fadeInUp} className={cn(bodyText, "pt-4")}>
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
        </motion.p>
      </motion.div>
    </section>
  );
};

export default NordicSpainClosingCtaSection;
