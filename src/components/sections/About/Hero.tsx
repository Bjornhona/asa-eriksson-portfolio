"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";
import { Button } from "@/ui";
import { FileDownIcon, HandshakeIcon, LinkedinIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import ScrollDownIndicator from "@/components/ScrollDownIndicator/ScrollDownIndicator";

const AboutHeroSection = () => {
  const t = useTranslations("about.hero");

  return (
    <section className="relative">
      <motion.div
        className="absolute right-[var(--space-4)] sm:right-[var(--space-6)] md:right-[var(--space-8)] lg:right-[var(--space-10)] xl:right-[var(--space-12)] w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] lg:w-[35vw] lg:h-[35vw] xl:w-[30vw] xl:h-[30vw] 2xl:w-[25vw] 2xl:h-[25vw] aspect-square overflow-hidden rounded-full"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <BlendImageFilter
          src="/Me.jpg"
          alt="Åsa Eriksson"
          width={400}
          height={400}
          className="-translate-y-4 xs:-translate-y-6 sm:-translate-y-10 md:-translate-y-16"
          loading="eager"
        />
      </motion.div>
      <div className="relative">
        <div className="flex max-w-sm xs:sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl flex-col justify-center [text-shadow:0_2px_6px_rgba(0,0,0,0.5)] z-10 py-12">
          <motion.div
            className="space-y-4"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={fadeInUp}>
              <TitleHoverGlow title={t("title") + '.'} />
            </motion.h1>

            <motion.h4 variants={fadeInUp} className="max-w-xs xs:sm:max-w-sm lg:max-w-md xl:max-w-lg">
              {t.rich("subtitle", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </motion.h4>

            <motion.h6 variants={fadeInUp}>
              {t.rich("description", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </motion.h6>

            <motion.h6 variants={fadeInUp}>
              {t.rich("works", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </motion.h6>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button asChild variant="glass" href="/asa-eriksson-cv.pdf">
                <FileDownIcon className="w-4 h-4" />
                {t("downloadCV")}
              </Button>
              <Button
                variant="glass"
                href="https://www.linkedin.com/in/asaeri3/"
              >
                <LinkedinIcon className="w-4 h-4" />
                {t("connectLinkedin")}
              </Button>
              <Button variant="glass" href="/services">
                <HandshakeIcon className="w-4 h-4" />
                {t("hireMe")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ScrollDownIndicator scrollToHref="/about#background-section" />
    </section>
  );
};

export default AboutHeroSection;
