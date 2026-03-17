import ServicesHeroSection from "@/components/sections/Services/Hero";
import ServicesSection from "@/components/sections/Services/Services";

const ServicesPage = () => {
  return (
    <div className="relative container max-w-full pt-[64px] pb-16">
      <ServicesHeroSection />
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
