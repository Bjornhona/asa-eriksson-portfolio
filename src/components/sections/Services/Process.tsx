"use client";
import { useState } from "react";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";
import { container, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const StepComponent = ({title, description}: {title: string, description: string}) => {
  return (
    <section id="background-section" className="scroll-mt-64">
    <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{title}</motion.h3>

        <motion.h6 variants={fadeInUp}>
          {description}
        </motion.h6>
      </motion.div>
    </section>
  );
};

const ProcessSection = () => {
  const t = useTranslations("services.process");
  const [activeIndex, setActiveIndex] = useState(0);

  const processItems = [
    {
      component: <StepComponent title={t("steps.discovery")} description={t("steps.discoveryDescription")} />,
    },
    {
      component: <StepComponent title={t("steps.design")} description={t("steps.designDescription")} />,
    },
    {
      component: <StepComponent title={t("steps.development")} description={t("steps.developmentDescription")} />,
    },
    {
      component: <StepComponent title={t("steps.launch")} description={t("steps.launchDescription")} />,
      last: true,
    },
  ];

  return (
    <section
      id="process-section"
      className="scroll-mt-64 pt-8 md:pt-12 pb-12 md:pb-16"
    >
      <motion.div
        className="space-y-6 max-w-5xl mx-auto"
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
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            last={item.last}
          >
            {item.component}
          </TimeLineWrapper>
        ))}
    </section>
  );
};

export default ProcessSection;
