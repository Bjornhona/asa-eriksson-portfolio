"use client";
import { MailIcon, FolderIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection/HeroSection";
import { ButtonsProps } from "@/components/HeroSection/HeroSection";

const ServicesHeroSection = () => {
  const t = useTranslations("services.hero");

  const subtitle = t.rich("subtitle", {
    strong: (chunks) => <strong>{chunks}</strong>,
  }) as string;

  const texts = [
    t.rich("description", {
      strong: (chunks) => <strong>{chunks}</strong>,
    }),
  ] as string[];

  const buttons: ButtonsProps[] = [
    {
      href: "mailto:info@asaeriksson.com",
      icon: <MailIcon className="w-4 h-4" />,
      label: t("contactMe"),
    },
    {
      href: "/portfolio",
      icon: <FolderIcon className="w-4 h-4" />,
      label: t("viewMyWork"),
    }
  ];

  return (
    <HeroSection
      imageSrc="/me-working1.jpeg"
      imageAlt="My services"
      title={t("title")}
      subtitle={subtitle}
      texts={texts}
      buttons={buttons}
    />
  );
};

export default ServicesHeroSection;
