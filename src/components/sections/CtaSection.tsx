"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import { Button } from "@/ui";
import { MailIcon } from "lucide-react";
import { Card } from "@/ui";
import { useTranslations } from "next-intl";

export interface CtaSectionProps {
  id?: string;
  title?: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

const CtaSection = ({ id, title, description, buttonText, buttonHref }: CtaSectionProps) => {
  const t = useTranslations();

  return (
    <section id={id ? id : "cta-section"} className="container max-w-lg mx-auto px-0 pt-6 md:pt-8 pb-16 md:pb-24">
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
            {title && <motion.h3 variants={fadeInUp}>{t(title)}</motion.h3>}
            {description && <motion.h5 variants={fadeInUp}>{t(description)}</motion.h5>}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button variant="glass" href={buttonHref}>
                <MailIcon className="w-4 h-4" />
                {t(buttonText)}
              </Button>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default CtaSection;
