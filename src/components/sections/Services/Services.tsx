"use client";
import { motion } from "framer-motion";
import { cardContainer, container, fadeInUp } from "@/lib/animations";
import { useTranslations } from "next-intl";
import { Code2, Palette, Gauge, Layout } from "lucide-react";
import IconCard from "@/components/GlassCards/IconCard";

const CARD_KEYS = ["frontend", "uiux", "performance", "landing"] as const;
const CARD_ICONS = {
  frontend: Code2,
  uiux: Palette,
  performance: Gauge,
  landing: Layout,
};

const ServicesSection = () => {
  const t = useTranslations("services.cards");

  return (
    <section
      id="services-section"
      className="scroll-mt-64 pt-8 md:pt-12 pb-12 md:pb-16"
    >
      <motion.div
        className="space-y-6 max-w-5xl mx-auto"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          variants={cardContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CARD_KEYS.map((key) => {
            const Icon = CARD_ICONS[key];
            const items = [
              t(`${key}.item1`),
              t(`${key}.item2`),
              t(`${key}.item3`),
            ];

            return (
              <IconCard 
              key={key}
              icon={<Icon className="w-6 h-6" />}
              title={t(`${key}.title`)}
              items={items}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
