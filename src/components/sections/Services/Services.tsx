"use client";

import { motion } from "framer-motion";
import { cardContainer, cardItem } from "@/lib/animations";
import { useTranslations } from "next-intl";
import { Code2, Palette, Gauge, Layout } from "lucide-react";

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
      className="scroll-mt-64 pt-16 md:pt-24"
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        variants={cardContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CARD_KEYS.map((key) => {
          const Icon = CARD_ICONS[key];
          const items = [t(`${key}.item1`), t(`${key}.item2`), t(`${key}.item3`)];

          return (
            <motion.article
              key={key}
              variants={cardItem}
              className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              {/* Subtle gradient glow on hover */}
              <span
                className="absolute inset-0 bg-gradient-to-br from-aqua-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 dark:bg-white/15 text-aqua-400 dark:text-aqua-400 group-hover:bg-aqua-400/20 dark:group-hover:bg-aqua-400/20 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h4 className="font-prompt font-semibold text-lg md:text-xl text-title">
                    {t(`${key}.title`)}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm md:text-base text-foreground/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
