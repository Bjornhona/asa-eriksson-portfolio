import { useTranslations } from "next-intl";

const AppFooter = () => {
  const t = useTranslations();

  return (
    <footer className="absolute bottom-0 left-0 right-0 flex flex-row gap-4 justify-between z-40 px-8 py-4 text-foreground">
      <h5>© 2026 Åsa Eriksson</h5>
      <h5>
        <a href="/privacy-policy">
          {t("footer.privacyPolicy")}
        </a> | <a href="/cookies-policy">
          {t("footer.cookiesPolicy")}
        </a> | <a href="/legal-notice">
          {t("footer.legalNotice")}
        </a>
      </h5>
    </footer>
  );
};

export default AppFooter;
