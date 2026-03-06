import { useTranslations } from "next-intl";

const CookiesPolicyPage = () => {
  const t = useTranslations("cookiesPolicy");

  return (
    <div className="min-h-screen pb-12">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <header className="mb-12 space-y-6">
          <h2>
            {t("title")}
          </h2>
          <p>
            {t("lastUpdated")}
          </p>
          <h6>
            {t("description")}
          </h6>
        </header>

        <section className="space-y-6">
          <h3>
            1. {t("whatAreCookies")}
          </h3>
          <h6>
            {t("whatAreCookiesDescription")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2. {t("howThisWebsiteUsesCookies")}
          </h3>
          <h6>
            {t("howThisWebsiteUsesCookiesDescription")}
          </h6>

          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            {t("analyticsCookies")}
          </h3>
          <h6>
            {t("analyticsCookiesDescription")}
          </h6>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <h6><li>{t("pagesVisited")}</li></h6>
            <h6><li>{t("timeSpent")}</li></h6>
            <h6><li>{t("deviceType")}</li></h6>
            <h6><li>{t("approximateGeographicLocation")}</li></h6>
          </ul>

          <h6>
            {t("dataCollected")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            3. {t("thirdPartyCookies")}
          </h3>
          <h6>
            {t("thirdPartyCookiesDescription")}
          </h6>
          <h6>
            {t("thirdPartyCookiesLearnMore")}:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-link underline underline-offset-4 transition-colors hover:text-link-hover"
            >
              https://policies.google.com/privacy
            </a>
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            4. {t("managingCookies")}
          </h3>
          <h6>
            {t("managingCookiesDescription")}
          </h6>
          <h6>
            {t("disablingCookiesMayAffect")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            5. {t("changesToThisCookiesPolicy")}
          </h3>
          <h6>
            {t("changesToThisCookiesPolicyDescription")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            6. {t("contact")}
          </h3>
          <h6>
            {t("contactDescription")}
          </h6>
        </section>
      </article>
    </div>
  );
};

export default CookiesPolicyPage;
