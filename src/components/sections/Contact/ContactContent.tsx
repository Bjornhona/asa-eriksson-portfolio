"use client";
import { motion } from "framer-motion";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import { Button } from "@/ui";
import { fadeInUp, container } from "@/lib/animations";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  const links = [
    { label: "Email", href: "mailto:info@asaeriksson.com", primary: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asaeri3/" },
    { label: "GitHub", href: "https://github.com/bjornhona" },
  ];
  const t = useTranslations("contact.content");
  const tForm = useTranslations("contact.form");

  return (
    <div className="mx-auto flex max-w-2xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-8">
      <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={fadeInUp}>
          <TitleHoverGlow title={t("title")} />
        </motion.h1>

        {/* Was an <h4>, which made the outline jump h1 -> h4 and then back to
            the h2 below. It is a tagline, not a section heading, so it is a
            paragraph carrying the same typography. The global h4 rule steps up
            at 480px and there is no 480px Tailwind breakpoint here, so it now
            steps up at 640px instead — a 2px difference in that band. */}
        <motion.p
          variants={fadeInUp}
          className="font-prompt text-lg font-medium text-title sm:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.p variants={fadeInUp}>{t("description")}</motion.p>

        <motion.p variants={fadeInUp}>{t("buildTogether")}</motion.p>

        <motion.nav
          className="flex flex-wrap gap-4 pt-2"
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

      {/* max-w-md is 640px in this project's remapped scale — a readable
          measure for form fields. The intro above keeps its original width. */}
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
