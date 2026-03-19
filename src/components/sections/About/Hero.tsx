"use client";
import { FileDownIcon, HandshakeIcon, LinkedinIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection/HeroSection";
import { ButtonsProps } from "@/components/HeroSection/HeroSection";

const AboutHeroSection = () => {
  const t = useTranslations("about.hero");

  const buttons: ButtonsProps[] = [
    {
      href: "/asa-eriksson-cv.pdf",
      icon: <FileDownIcon className="w-4 h-4" />,
      label: t("downloadCV"),
    },
    {
      href: "https://www.linkedin.com/in/asaeri3/",
      icon: <LinkedinIcon className="w-4 h-4" />,
      label: t("connectLinkedin"),
    },
    {
      href: "/services",
      icon: <HandshakeIcon className="w-4 h-4" />,
      label: t("hireMe"),
    },
  ];

  const subtitle = t.rich("subtitle", {
    strong: (chunks) => <strong>{chunks}</strong>,
  }) as string;

  const texts = [
    t.rich("description", {
      strong: (chunks) => <strong>{chunks}</strong>,
    }),
    t.rich("works", {
      strong: (chunks) => <strong>{chunks}</strong>,
    }),
  ] as string[];

  return (
    <HeroSection
      imageSrc="/Me.jpg"
      imageAlt="Åsa Eriksson"
      title={t("title")}
      subtitle={subtitle}
      texts={texts}
      buttons={buttons}
      scrollToHref="/about#background-section"
    />
  );
};

export default AboutHeroSection;
