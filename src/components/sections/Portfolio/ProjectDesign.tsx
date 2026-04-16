"use client";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectDesignSection = ({ project }: { project: PortfolioItem }) => {
  const t = useTranslations("portfolio.work");

  return project.designImage && (
    <section id="project-design" className="space-y-4">
      <h3>{t(project.text + ".design.title")}</h3>
      <p>{t(project.text + ".design.description")}</p>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={project.designImage}
          alt={t(project.text + ".design.alt")}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h5>{t(project.text + ".design.subTitle")}</h5>
    </section>
  );
};

export default ProjectDesignSection;
