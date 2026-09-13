"use client";
import { motion } from "framer-motion";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import HeroCircleImage from "@/components/HeroCircleImage/HeroCircleImage";
import { Button } from "@/ui";
import { fadeInUp, container } from "@/lib/animations";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

/* The portrait is smaller here than on the hero routes. Those pages carry a
   50vw/40vw circle at mobile, which would put the face directly behind the
   opening lines of copy; 32vw keeps it clear of everything above the fold. */
const CIRCLE_SIZE =
  "w-[32vw] h-[32vw] lg:w-[35vw] lg:h-[35vw] xl:w-[30vw] xl:h-[30vw] 2xl:w-[25vw] 2xl:h-[25vw]";

/* Mirrors CIRCLE_SIZE, including the cap below, so next/image never requests a
   candidate wider than the circle can actually paint. */
const CIRCLE_SIZES =
  "(min-width: 1536px) min(25vw, 520px), (min-width: 1280px) 30vw, (min-width: 1024px) 35vw, 32vw";

/* Hard pixel cap. me-portrait-2026.webp is 579x940, so its usable square crop
   is 579px — beyond that the browser upscales and the face goes soft. 520 sits
   just inside that with room for the round mask. Raise this one number when a
   larger export lands (and CIRCLE_SIZES / SECTION_MIN_HEIGHT alongside it). */
const CIRCLE_CAP = "max-w-[520px] max-h-[520px]";

/* Reserves the circle's height on the intro block itself. Without this the
   circle — absolutely positioned, so contributing no height — would spill out
   of the section and over the form heading and fields below. */
const SECTION_MIN_HEIGHT =
  "min-h-[32vw] lg:min-h-[35vw] xl:min-h-[30vw] 2xl:min-h-[min(25vw,520px)]";

/* Keeps the copy out of the circle. Each value is the content box minus the
   circle, minus the gutter it is inset by at that breakpoint, minus a 16px
   gap — so the text column stops short of the portrait instead of running
   across the face. Deliberately absent at the base breakpoint: below 640px the
   circle is only 32vw and sits high enough that the copy passes under its
   bottom edge, and clamping there would squeeze the paragraphs to ~190px. */
const INTRO_CLEARANCE = [
  "sm:max-w-[calc(100%-32vw-var(--space-6)-var(--space-4))]",
  "md:max-w-[calc(100%-32vw-var(--space-8)-var(--space-4))]",
  "lg:max-w-[calc(100%-35vw-var(--space-10)-var(--space-4))]",
  "xl:max-w-[calc(100%-30vw-var(--space-12)-var(--space-4))]",
  "2xl:max-w-[calc(100%-min(25vw,520px)-var(--space-12)-var(--space-4))]",
].join(" ");

const ContactContent = () => {
  const links = [
    { label: "Email", href: "mailto:info@asaeriksson.com", primary: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asaeri3/" },
    { label: "GitHub", href: "https://github.com/bjornhona" },
  ];
  const t = useTranslations("contact.content");
  const tForm = useTranslations("contact.form");

  return (
    <div className="relative container max-w-full pt-[64px] pb-16">
      <section className={`relative ${SECTION_MIN_HEIGHT}`}>
        <HeroCircleImage
          src="/me-working-2026.webp"
          alt={t("imageAlt")}
          eager
          sizeClassName={CIRCLE_SIZE}
          sizes={CIRCLE_SIZES}
          className={`${CIRCLE_CAP}`}
          objectPositionClassName="object-top"
          overlayClassName="opacity-60"
          imageFilterClassName="grayscale"
        />

        <div className="relative z-10 flex flex-col justify-center py-12 pointer-events-none dark:[text-shadow:0_2px_6px_rgba(0,0,0,0.5)]">
          <motion.div
            className={`space-y-4 ${INTRO_CLEARANCE}`}
            variants={container}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={fadeInUp} className="pointer-events-auto">
              <TitleHoverGlow title={t("title")} />
            </motion.h1>

            {/* Was an <h4>, which made the outline jump h1 -> h4 and then back to
                the h2 below. It is a tagline, not a section heading, so it is a
                paragraph carrying the same typography. The global h4 rule steps up
                at 480px and there is no 480px Tailwind breakpoint here, so it now
                steps up at 640px instead — a 2px difference in that band. */}
            <motion.p
              variants={fadeInUp}
              className="font-prompt text-lg font-medium text-title sm:text-xl max-w-xs sm:max-w-sm lg:max-w-md"
            >
              {t("subtitle")}
            </motion.p>

            <motion.p variants={fadeInUp} className="max-w-sm lg:max-w-md xl:max-w-lg">
              {t("description")}
            </motion.p>

            <motion.p variants={fadeInUp} className="max-w-sm lg:max-w-md xl:max-w-lg">
              {t("buildTogether")}
            </motion.p>

            <motion.nav
              className="flex flex-wrap gap-4 pt-2 pointer-events-auto"
              variants={fadeInUp}
              aria-label="Contact links"
            >
              {links.map((link) =>
                link.primary ? (
                  <Button key={link.label} href={link.href} variant="glass">
                    {link.label}
                  </Button>
                ) : (
                  <Button key={link.label} href={link.href} variant="link">
                    {link.label}
                  </Button>
                ),
              )}
            </motion.nav>
          </motion.div>
        </div>
      </section>

      {/* max-w-md is 640px in this project's remapped scale — a readable
          measure for form fields. It now shares the container's left gutter
          with the intro above instead of being centred on its own. */}
      <motion.section
        aria-labelledby="contact-form-heading"
        className="mt-12 w-full max-w-md md:mt-16 mb-12"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h4
          id="contact-form-heading"
          variants={fadeInUp}
          className="mb-6"
        >
          {tForm("heading")}
        </motion.h4>

        <motion.div variants={fadeInUp}>
          <ContactForm />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactContent;
