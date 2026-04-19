"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";
import { Button } from "@/ui";
import ScrollDownIndicator from "@/components/ScrollDownIndicator/ScrollDownIndicator";

export interface ButtonsProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  texts: string[];
  buttons?: ButtonsProps[];
  scrollTo?: {
    href: string;
    text?: string;
  };
}

const HeroSection = ({ imageSrc, imageAlt, title, subtitle, texts, buttons, scrollTo }: HeroSectionProps) => {
  return (
    <>
      <motion.div
        className="absolute right-[var(--space-4)] sm:right-[var(--space-6)] md:right-[var(--space-8)] lg:right-[var(--space-10)] xl:right-[var(--space-12)] w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] lg:w-[35vw] lg:h-[35vw] xl:w-[30vw] xl:h-[30vw] 2xl:w-[25vw] 2xl:h-[25vw] aspect-square overflow-hidden rounded-full"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <BlendImageFilter
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          loading="eager"
        />
      </motion.div>
      <div className="relative flex flex-col justify-center dark:[text-shadow:0_2px_6px_rgba(0,0,0,0.5)] z-10 py-12 pointer-events-none">
        <motion.div
          className="space-y-4"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={fadeInUp} className="pointer-events-auto">
            <TitleHoverGlow title={title + "."} />
          </motion.h1>

          <motion.h4
            variants={fadeInUp}
            className="max-w-xs xs:sm:max-w-sm lg:max-w-md xl:max-w-lg"
          >
            {subtitle}
          </motion.h4>

          {texts.map((text) => (
            <motion.h6
              key={text}
            variants={fadeInUp}
            className="max-w-sm xs:sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl"
          >
            {text}
          </motion.h6>))}

          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col sm:flex-row gap-4 pt-4 pointer-events-auto"
          >
            {buttons && buttons.map((button) => (
              <Button asChild variant="glass" href={button.href} key={button.label}>
                {button.icon}
                {button.label}
              </Button>
            ))}
            {scrollTo && <ScrollDownIndicator scrollToHref={scrollTo.href} indicatorText={scrollTo.text} />}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
