"use client";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import { useTranslations } from "next-intl";

const ProjectDataSection = ({ project }: { project: PortfolioItem }) => {
  const t = useTranslations("portfolio.work");

  return (
    <section id="project-data">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:repeat(4,max-content)] sm:justify-between gap-4 py-4 sm:py-8 md:py-12 border-b border-blue-400">
        <div className="flex flex-col gap-2">
          <h4>{t("projectData.year")}</h4>
          <p>{new Date(project.date).getFullYear()}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>{t("projectData.type")}</h4>
          <p>{t(`projectData.${project.appType}`)}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>{t("projectData.stack")}</h4>
          <p>{project.tags.join(", ")}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>{t("projectData.role")}</h4>
          <p>{t(`projectData.${project.myRole}`)}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDataSection;
