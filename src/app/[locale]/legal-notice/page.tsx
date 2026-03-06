import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const LegalNoticePage = () => {
  const t = useTranslations("legalNotice");

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
        </header>

        <section className="space-y-6">
          <h3>
            1. {t("websiteOwner")}
          </h3>
          <h6>
            {t("operatedByDescription")}
          </h6>
          <h6>
            <strong>{t("name")}:</strong> Åsa Eriksson
            <br />
            <strong>{t("website")}:</strong>{" "}
            https://www.asaeriksson.com
            <br />
            <strong>{t("activity")}:</strong>{" "}
            {t("frontendDevelopment")}
            <br />
            <strong>{t("contact")}:</strong>{" "}
            {t("contactDescription")}{" "}
            <a href="mailto:info@asaeriksson.com">
              info@asaeriksson.com
            </a>
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            2. {t("purposeOfTheWebsite")}
          </h3>
          <h6>
            {t("purposeOfTheWebsiteDescription")}
          </h6>
          <h6>
            {t("websiteMayAlsoProvideInformation")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            3. {t("termsOfUse")}
          </h3>
          <h6>
            {t("termsOfUseDescription")}
          </h6>
          <h6>
            {t("userAgreesNotToUseWebsite")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            4. {t("intellectualProperty")}
          </h3>
          <h6>
            {t("intellectualPropertyDescription")}
          </h6>
          <h6>
            {t("unauthorizedReproduction")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            5. {t("externalLinks")}
          </h3>
          <h6>
            {t("externalLinksDescription")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            6. {t("limitationOfLiability")}
          </h3>
          <h6>
            {t("limitationOfLiabilityDescription")}
          </h6>
          <h6>
            {t("websiteOwnerShallNotBeHeldLiable")}
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            7. {t("dataProtection")}
          </h3>
          <h6>
            {t("dataProtectionDescription")}
          </h6>
          <h6>
            {t("moreInformation")}{" "}
            <Link href="/privacy-policy">
              {t("privacyPolicy")}
            </Link>
            .
          </h6>
        </section>

        <hr className="my-12 border-gray-700" />

        <section className="space-y-6">
          <h3>
            8. {t("applicableLaw")}
          </h3>
          <h6>
            {t("applicableLawDescription")}
          </h6>
          <h6>
            {t("jurisdiction")}
          </h6>
        </section>
      </article>
    </div>
  );
};

export default LegalNoticePage;
