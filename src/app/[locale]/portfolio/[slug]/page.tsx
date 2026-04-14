// import { useTranslations } from "next-intl";
import HeroSection, {
  ButtonsProps,
} from "@/components/HeroSection/HeroSection";
import { Github, Globe, MailIcon } from "lucide-react";
import { notFound } from "next/navigation";

const PortfolioDetailPage = async ({ params }: { params: { slug: string } }) => {
  // const t = useTranslations(`portfolioDetails.${slug}`);
  const { slug } = await params;
  console.log(slug);
  if (!slug) {
    notFound()
  }

  const projectUrl = () => {
    switch (slug) {
      case "cg-consulting":
        return "https://cg-consulting.es";
      case "tech-beach-mama":
        return "https://techbeachmama.com";
      case "sculpted-goddess":
        return "https://sculptedgoddess.vercel.app";
      default:
        return "/";
    }
  };

  const githubRepoName = () => {
    switch (slug) {
      case "cg-consulting":
        return "cg-consulting";
      case "sculpted-goddess":
        return "Sculpted-goddess";
      default:
        return null;
    }
  };

  const baseButtons: ButtonsProps[] = [
    {
      href: projectUrl(),
      icon: <Globe className="w-4 h-4" />,
      // label: t("hero.viewLive"),
      label: "View Live Site",
    },
    {
      href: "/contact",
      icon: <MailIcon className="w-4 h-4" />,
      // label: t("hero.contactMe"),
      label: "Contact Me",
    },
  ];

  const buttons: ButtonsProps[] = githubRepoName() ? [
    ...baseButtons,
    {
      href: `https://github.com/bjornhona/${githubRepoName()}`,
      icon: <Github className="w-4 h-4" />,
      // label: t("hero.github"),
      label: "View on GitHub",
    },
  ] : baseButtons;

  return (
    <div id="portfolio-details" className="relative container max-w-full pt-[64px] pb-16">
      <HeroSection
        imageSrc={`/portfolio/${slug}/1.[jpg,png,webp]`}
        // imageAlt={t("hero.title")}
        // title={t("hero.title")}
        // subtitle={t("hero.subtitle")}
        // texts={[t("hero.description")]}
        imageAlt={"Hello"}
        title={"Hero title"}
        subtitle={"Hero subtitle"}
        texts={["Hero description"]}
        buttons={buttons}
      />
    </div>
  );
};

export default PortfolioDetailPage;
