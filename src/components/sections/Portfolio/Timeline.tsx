"use client";
import { useState } from "react";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";
import ProjectDesignSection from "./ProjectDesign";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import { TimelineItemType } from "@/app/[locale]/about/page";
import TimeLineTextSection from "@/components/TimeLineWrapper/TimeLineTextSection";
import { useTranslations } from "next-intl";

export default function PortfolioTimeline({
  project,
}: {
  project: PortfolioItem;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("portfolio.work");

  const timelineItems: TimelineItemType[] = [
    {
      component: (
        <TimeLineTextSection
          id="project-overview"
          title={t(project.text + ".overview.title")}
          description={t(project.text + ".overview.description")}
          textItems={[
            t(project.text + ".overview.subTitle"),
            t(project.text + ".overview.subTitle2"),
          ]}
        />
      ),
    },
    {
      component: <ProjectDesignSection project={project} />,
    },
    {
      component: null,
      last: true,
    },
  ];

  return (
    <>
      {timelineItems.map((item, index) => (
        <TimeLineWrapper
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          last={item.last}
        >
          {item.component}
        </TimeLineWrapper>
      ))}
    </>
  );
}
