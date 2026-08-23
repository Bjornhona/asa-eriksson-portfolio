"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { container, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/components/button";
import AnchorCta from "./AnchorCta";
import { bodyText, focusRing } from "./styles";

const NordicSpainHeroSection = () => {
  const t = useTranslations("nordicSpain.hero");

  return (
    <section aria-labelledby="hero-heading" className="pt-8 pb-12 md:pb-16">
      <motion.div
        className="max-w-lg space-y-6"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {/*
          The site's other h1s use TitleHoverGlow, which wraps every character
          in its own <span>. Screen readers can read that out one letter at a
          time, so this page sets its headline as plain text instead.
        */}
        <motion.h1
          id="hero-heading"
          variants={fadeInUp}
          className="font-prompt font-semibold text-title text-3xl sm:text-4xl md:text-5xl leading-normal tracking-normal"
        >
          {t("title")}
        </motion.h1>

        <motion.p variants={fadeInUp} className={cn(bodyText, "max-w-md")}>
          {t("lead")}
        </motion.p>

        <motion.p variants={fadeInUp} className={cn(bodyText, "max-w-md")}>
          {t("body")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center"
        >
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

          <AnchorCta
            targetId="services"
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-2 py-2 text-base text-link underline underline-offset-4 hover:text-linkHover",
              focusRing,
            )}
          >
            {t("secondaryCta")}
            <span aria-hidden="true">&rarr;</span>
          </AnchorCta>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NordicSpainHeroSection;
