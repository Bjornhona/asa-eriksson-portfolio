"use client";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";
import { StepComponent } from "./StepComponent";
import { useTranslations } from "next-intl";
import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const t = useTranslations("services.process");
  const processItems = [
    {
      component: <StepComponent title={"discovery"} description={"discoveryDescription"} />,
    },
    {
      component: <StepComponent title={"design"} description={"designDescription"} />,
    },
    {
      component: <StepComponent title={"development"} description={"developmentDescription"} />,
    },
    {
      component: <StepComponent title={"launch"} description={"launchDescription"} />,
      last: true,
    },
  ];

  return (
    <section
      id="process-section"
      className="scroll-mt-64 pt-8 md:pt-12 pb-12 md:pb-16"
    >
      <motion.div
        className="space-y-6 max-w-5xl mx-auto sm:text-center"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <motion.h6 variants={fadeInUp}>{t("description")}</motion.h6>
      </motion.div>
      {processItems.map((item, index) => (
          <TimeLineWrapper
            index={index}
            key={index}
            last={item.last}
          >
            {item.component}
          </TimeLineWrapper>
        ))}
    </section>
  );
};

export default ProcessSection;
