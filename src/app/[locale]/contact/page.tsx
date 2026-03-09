"use client";
import { motion } from "framer-motion";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import { Button } from "@/ui";
import { fadeInUp, container } from "@/lib/animations";

const ContactPage = () => {
  const links = [
    { label: "Email", href: "mailto:info@asaeriksson.com", primary: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/graphics-by-asa/" },
    { label: "GitHub", href: "https://github.com/bjornhona" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-8">
        <motion.div
          className="space-y-4"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={fadeInUp}>
            <TitleHoverGlow title={"Get in touch."} />
          </motion.h1>

          <motion.h4 variants={fadeInUp}>
            Freelance frontend development • Web design • Modern web apps
          </motion.h4>

          <motion.p variants={fadeInUp}>
            Need a beautiful, well-structured website you can truly own and
            maintain yourself?
          </motion.p>

          <motion.p variants={fadeInUp}>
            Let&apos;s build it together.
          </motion.p>

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
      </div>
    </div>
  );
};

export default ContactPage;
