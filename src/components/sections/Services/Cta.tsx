"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/ui";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const ServicesCtaSection = () => {
  const t = useTranslations("services.cta");

  return (
    <section>
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-center gap-4 pt-12 md:pt-16 pb-24"
      >
        <motion.h5 variants={fadeInUp}>{t("title")}</motion.h5>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="glass" href="mailto:info@asaeriksson.com">
            <MailIcon className="w-4 h-4" />
            {t("buttonText")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesCtaSection;
