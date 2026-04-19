"use client";
import { useTranslations } from "next-intl";
import CtaSection from "@/components/sections/CtaSection";

const ServicesCtaSection = () => {
  const t = useTranslations("services.cta");

  return (
    <CtaSection
      id="services-cta-section"
      title={t("title")}
      buttonText={t("buttonText")}
      buttonHref="/contact"
    />
  );
};

export default ServicesCtaSection;
