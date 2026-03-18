"use client";
import { motion } from "framer-motion";
import { cardContainer, cardItem, container, fadeInUp } from "@/lib/animations";
import { useTranslations } from "next-intl";
import PriceCard from "@/components/PriceCard/PriceCard";
import { CheckIcon } from "lucide-react";

const ServicesPricingSection = () => {
  const t = useTranslations("services.pricing");

  const includesList = [
    t("includes.cleanModernDesign"),
    t("includes.mobileFirstResponsive"),
    t("includes.highPerformance"),
    t("includes.scalableArchitecture"),
    t("includes.smoothUserExperience"),
  ];

  return (
    <section id="pricing-section">
      <motion.div
        className="space-y-4 container px-0 text-center pt-8 md:pt-12 pb-12 md:pb-16"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <motion.h6 variants={fadeInUp}>{t("subtitle")}</motion.h6>
        <motion.p variants={fadeInUp}>{t("description")}</motion.p>

        {/* <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 text-left py-6 gap-4 lg:gap-0"
          variants={cardContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={cardItem}
            className="rounded-2xl bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
          >
            <PriceCard
              title={t("offers.landingPages")}
              description={t("offers.landingPagesDescription")}
              price="€800"
            />
          </motion.div>
          <motion.div
            variants={cardItem}
            className="rounded-2xl bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
          >
            <PriceCard
              title={t("offers.websites")}
              description={t("offers.websitesDescription")}
              price="€1500"
            />
          </motion.div>
          <motion.div
            variants={cardItem}
            className="rounded-2xl bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
          >
            <PriceCard
              title={t("offers.customApps")}
              description={t("offers.customAppsDescription")}
              custom={t("customQuote")}
            />
          </motion.div>
        </motion.div> */}

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 text-left py-6 divide-y lg:divide-y-0 lg:divide-x divide-blue-400"
          variants={cardContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          <PriceCard
            title={t("offers.landingPages")}
            description={t("offers.landingPagesDescription")}
            price="€800"
          />
          <PriceCard
            title={t("offers.websites")}
            description={t("offers.websitesDescription")}
            price="€1500"
          />
          <PriceCard
            title={t("offers.customApps")}
            description={t("offers.customAppsDescription")}
            custom={t("customQuote")}
          />
        </motion.div>

        <motion.h5 variants={fadeInUp}>
          <strong>{t("whatsIncluded")}</strong>
        </motion.h5>
        <motion.div className="flex justify-center" variants={fadeInUp}>
          <motion.ul
            className="space-y-2 text-left"
            variants={cardContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {includesList.map((item) => (
              <motion.li
                key={item}
                variants={cardItem}
                className="flex items-center gap-2"
              >
                <CheckIcon className="w-4 h-4 text-blue-400" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.h6 variants={fadeInUp}>
          <strong>{t("designAndDevelopment")}</strong>
        </motion.h6>
      </motion.div>
    </section>
  );
};

export default ServicesPricingSection;
