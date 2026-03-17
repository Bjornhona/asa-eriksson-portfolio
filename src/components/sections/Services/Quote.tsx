import { useTranslations } from "next-intl";
import Quote from "@/components/Quote/Quote";

const ServicesQuoteSection = () => {
  const t = useTranslations("services.quote");

  return (
    <section id="quote-section ">
      <Quote quote={t("description")} />
    </section>
  );
};

export default ServicesQuoteSection;
