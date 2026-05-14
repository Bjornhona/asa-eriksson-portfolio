"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/ui";
import { FolderIcon, HandshakeIcon, FileDownIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const AboutCtaAndCVSection = () => {
  const t = useTranslations("about.ctaAndCV");

  return (
    <section>
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-center gap-4 pb-24"
      >
        <motion.h5 variants={fadeInUp}>
          {t("title")}
        </motion.h5>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="glass" href="/portfolio">
            <FolderIcon className="w-4 h-4" />
            {t("viewPortfolio")}
          </Button>
          <Button variant="glass" href="/services">
            <HandshakeIcon className="w-4 h-4" />
            {t("hireMe")}
          </Button>
          <Button asChild variant="glass" href="/asa-eriksson-cv.pdf">
            <FileDownIcon className="w-4 h-4" />
            {t("downloadCV")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutCtaAndCVSection;
