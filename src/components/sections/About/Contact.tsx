import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { Button } from "@/ui";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const AboutContactSection = () => {
  const t = useTranslations("about.contact");

  return (
    <section id="contact-section">
      <motion.div
          className="space-y-4 max-w-md mx-auto"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h6 variants={fadeInUp}>
            {t.rich("description", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </motion.h6>

          <motion.h6 variants={fadeInUp}>
            {t("buildTogether")}
          </motion.h6>

          <Button variant="glass" href="mailto:info@asaeriksson.com">
            <MailIcon className="w-4 h-4" />
            {t("buttonText")}
          </Button>
        </motion.div>
    </section>
  );
};

export default AboutContactSection;
