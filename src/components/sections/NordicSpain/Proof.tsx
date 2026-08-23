"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cardContainer, container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Card } from "@/ui";
import { bodyText, prose, sectionHeading, subHeading, sectionSpacing, focusRing } from "./styles";

const NordicSpainProofSection = () => {
  const t = useTranslations("nordicSpain.proof");

  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className={sectionSpacing}
    >
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className={cn(prose, "mx-auto")}
      >
        <motion.h2
          id="proof-heading"
          variants={fadeInUp}
          className={cn(sectionHeading, "mb-6")}
        >
          {t("title")}
        </motion.h2>
      </motion.div>

      <motion.div
        className={cn(prose, "mx-auto")}
        variants={cardContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card>
          <h3 className={cn(subHeading, "mb-1")}>{t("name")}</h3>
          <p className="mb-3 text-base text-foreground/90">{t("role")}</p>
          <p className={cn(bodyText, "text-base")}>{t("body")}</p>

          <Link
            href="/portfolio/casa-madre"
            className={cn(
              "mt-5 inline-flex items-center gap-2 rounded-md px-2 py-2 text-base text-link underline underline-offset-4 hover:text-linkHover",
              focusRing,
            )}
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Card>
      </motion.div>
    </section>
  );
};

export default NordicSpainProofSection;
