import { useTranslations } from "next-intl";
import Logo from "../../../packages/ui/Logo/Logo";

const AppFooter = () => {
  const t = useTranslations();

  return (
    <footer className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row gap-4 justify-between z-40 py-4 px-4 sm:px-6 md:px-8 text-foreground bg-gradient-to-t from-background/50 to-transparent">
      <div className="flex items-end gap-1">
        <Logo logoSrc="/logo-dark.svg" logoDarkModeSrc="/logo-light.svg" />
        <p className="pb-1">© 2026 Åsa Eriksson</p>
      </div>
      <p className="flex items-end gap-1 pb-1">
        <a href="/privacy-policy">
          {t("footer.privacyPolicy")}
        </a> | <a href="/cookies-policy">
          {t("footer.cookiesPolicy")}
        </a> | <a href="/legal-notice">
          {t("footer.legalNotice")}
        </a>
      </p>
    </footer>
  );
};

export default AppFooter;
