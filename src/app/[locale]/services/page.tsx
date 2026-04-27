import ServicesHeroSection from "@/components/sections/Services/Hero";
import ServicesSection from "@/components/sections/Services/Services";
import ProcessSection from "@/components/sections/Services/Process";
import ServicesQuoteSection from "@/components/sections/Services/Quote";
import ServicesCtaSection from "@/components/sections/Services/Cta";
// import ServicesWorkSection from "@/components/sections/Services/Work";
import ServicesPricingSection from "@/components/sections/Services/Pricing";
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";

const ServicesPage = () => {
  return (
    <div className="relative container max-w-full pt-[64px] pb-16">
      <ServicesHeroSection />
      <ServicesSection />
      <ProcessSection />
      <ServicesQuoteSection />
      {/* <ServicesWorkSection /> */}
      <TestimonialsSection />
      <ServicesPricingSection />
      <ServicesCtaSection />
    </div>
  );
};

export default ServicesPage;
