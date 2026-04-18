"use client";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";

const ProjectDataSection = ({ project }: { project: PortfolioItem }) => {
  const t = useTranslations("portfolio.work");

  return (
    <section id="project-data" className="scroll-mt-64">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:repeat(4,max-content)] sm:justify-between gap-4 py-4 sm:py-8 md:py-12 border-b border-blue-400"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <h4>{t("projectData.year")}</h4>
          <p>{new Date(project.date).getFullYear()}</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <h4>{t("projectData.type")}</h4>
          <p>{t(`projectData.${project.appType}`)}</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <h4>{t("projectData.stack")}</h4>
          <p>{project.tags.join(", ")}</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <h4>{t("projectData.role")}</h4>
          <p>{t(`projectData.${project.myRole}`)}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDataSection;
