"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import { Button } from "@/ui";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/ui";

const ServicesCtaSection = () => {
  const t = useTranslations("services.cta");

  return (
    <section id="services-cta-section" className="container max-w-lg mx-auto px-0 pt-6 md:pt-8 pb-16 md:pb-24">
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 text-center"
          >
            <motion.h5 variants={fadeInUp}>{t("title")}</motion.h5>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="glass" href="/contact">
                <MailIcon className="w-4 h-4" />
                {t("buttonText")}
              </Button>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default ServicesCtaSection;
