import HeroSection, { ButtonsProps } from "@/components/HeroSection/HeroSection";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const PortfolioHeroSection = () => {
  const t = useTranslations("portfolio.hero");

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
      href: "/contact",
      icon: <MailIcon className="w-4 h-4" />,
      label: t("contactMe"),
    },
  ];

  const scrollTo = { href: "#portfolio/works-section", text: t("seeWorks") };

  return (
    <HeroSection
      imageSrc="/portfolio/tech-beach-mama/hero.webp"
      imageAlt="Portfolio Hero"
      title={t("title")}
      subtitle={subtitle}
      texts={texts}
      buttons={buttons}
      scrollTo={scrollTo}
    />
  );
};

export default PortfolioHeroSection;