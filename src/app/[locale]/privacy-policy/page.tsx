import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  const t = useTranslations("privacyPolicy");

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
            1. {t("websiteOwner")}
          </h3>

          <h6>
            {t("operatedBy")}
          </h6>

          <h6><strong>Åsa Eriksson</strong></h6>
          <h6>
            {t("developer")}
          </h6>
          <h6>
            {t("website")}:{" "}
            <a
              href="https://asaeriksson.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-link underline underline-offset-4 transition-colors hover:text-link-hover"
            >
              https://asaeriksson.com
            </a>
          </h6>

          <h6>
            {t("questions")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2. {t("informationCollected")}
          </h3>

          <h6>
            {t("collected")}
          </h6>

          <h3>
            2.1 {t("contactForm")}
          </h3>

          <h6>
            {t("contactFormDescription")}
          </h6>

          <ul className="list-inside list-disc space-y-2 pl-2">
            <h6><li>{t("name")}</li></h6>
            <h6><li>{t("email")}</li></h6>
            <h6><li>{t("message")}</li></h6>
          </ul>

          <h6>
            {t.rich("used", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </h6>

          <h6>
            {t.rich("notUsed", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.2 {t("analyticsData")}
          </h3>

          <h6>
            {t.rich("analyticsDataDescription", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </h6>

          <h6>
            {t("analyticsDataCollected")}
          </h6>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <h6><li>{t("pagesVisited")}</li></h6>
            <h6><li>{t("timeSpent")}</li></h6>
            <h6><li>{t("deviceType")}</li></h6>
            <h6><li>{t("browserType")}</li></h6>
            <h6><li>{t("approximateGeographicLocation")}</li></h6>
            <h6><li>{t("referringWebsites")}</li></h6>
          </ul>

          <h6>
            {t("googleStore")}
          </h6>

          <h6>
            {t("googlePrivacyPolicy")}:{" "}
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
            2.3 {t("cookies")}
          </h3>

          <h6>
            {t.rich("cookiesDescription", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </h6>

          <h6>
            {t("cookiesStored")}
          </h6>

          <h6>
            {t("cookiesDisabled")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.4 {t("purposeOfDataProcessing")}
          </h3>

          <h6>
            {t("purposeOfDataProcessingDescription")}
          </h6>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <h6><li>{t("respondingToContactInquiries")}</li></h6>
            <h6><li>{t("understandingWebsiteTraffic")}</li></h6>
            <h6><li>{t("improvingTheWebsite")}</li></h6>
          </ul>

          <h6>
            {t("noPersonalData")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.5 {t("dataRetention")}
          </h3>

          <h6>
            {t("messagesStored")}
          </h6>
          <h6>
            {t("analyticsRetention")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.6 {t("yourRights")}
          </h3>

          <h6>
            {t("europeanUnion")}
          </h6>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <h6><li>{t("requestAccess")}</li></h6>
            <h6><li>{t("requestCorrection")}</li></h6>
            <h6><li>{t("requestDeletion")}</li></h6>
            <h6><li>{t("objectToProcessing")}</li></h6>
          </ul>

          <h6>
            {t("ifYouWishToExerciseAnyOfTheseRights")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.7 {t("thirdPartyServices")}
          </h3>

          <h6>
            {t("thirdPartyServicesDescription")}
          </h6>

          <p className="font-semibold text-foreground">
            {t("googleAnalytics")}
          </p>
          <h6>
            {t("googleAnalyticsDescription")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.8 {t("dataSecurity")}
          </h3>

          <h6>
            {t("dataSecurityDescription")}
          </h6>
          <h6>
            {t("noMethodOfTransmission")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.9 {t("changesToThisPolicy")}
          </h3>

          <h6>
            {t("changesToThisPolicyDescription")}
          </h6>

          <h6>
            {t("anyUpdatesRevisionDate")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2.10 {t("contact")}
          </h3>

          <h6>
            {t("contactDescription")} <a href="mailto:info@asaeriksson.com">info@asaeriksson.com</a>.
          </h6>
          <p className="font-semibold text-foreground">Åsa Eriksson</p>
        </section>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
