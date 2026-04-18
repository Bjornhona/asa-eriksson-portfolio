"use client";
import { useState } from "react";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";
import TimeLineImageSection from "@/components/TimeLineWrapper/TimeLineImageSection";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import { TimelineItemType } from "@/app/[locale]/about/page";
import TimeLineTextSection from "@/components/TimeLineWrapper/TimeLineTextSection";
import { useTranslations } from "next-intl";

export default function  PortfolioTimeline({
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
          title={t(project.text + ".step1.title")}
          label={t(project.text + ".step1.label")}
          textItems={[
            t(project.text + ".step1.textItem1"),
            t.rich(project.text + ".step1.textItem2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            }),
            t(project.text + ".step1.textItem3")
          ]}
        />
      ),
    },
    {
      component: (
        <TimeLineImageSection
          id={"project-design"}
          title={t(project.text + ".step2.title")}
          label={t(project.text + ".step2.label")}
          textItems={[t(project.text + ".step2.textItem1")]}
          imageSrc={project.images[1]}
          alt={t(project.text + ".step2.alt")}
          caption={t(project.text + ".step2.caption")}
        />
      )
    },
    {
      component: (
        <TimeLineTextSection
          id="migration-and-architecture"
          title={t(project.text + ".step3.title")}
          label={t(project.text + ".step3.label")}
          textItems={[
            t(project.text + ".step3.textItem1"),
            t(project.text + ".step3.textItem2")
          ]}
        />
      ),
    },
    {
      component: (
        <TimeLineImageSection
          id="the-solution-live"
          title={t(project.text + ".step4.title")}
          label={t(project.text + ".step4.label")}
          textItems={[t(project.text + ".step4.textItem1")]}
          imageSrc={project.images[2]}
          alt={t(project.text + ".step4.alt")}
          caption={t(project.text + ".step4.caption")}
        />
      ),
    },
    {
      component: (
        <TimeLineImageSection
          id="performance-and-seo"
          title={t(project.text + ".step5.title")}
          label={t(project.text + ".step5.label")}
          textItems={[
            t(project.text + ".step5.textItem1"),
            t.rich(project.text + ".step5.textItem2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            }),
          ]}
          imageSrc={project.images[3]}
          alt={t(project.text + ".step5.alt")}
          caption={t(project.text + ".step5.caption")}
        />
      ),
    },
    {
      component: (
        <TimeLineImageSection
          id="content-management-system"
          title={t(project.text + ".step6.title")}
          label={t(project.text + ".step6.label")}
          textItems={[t(project.text + ".step6.textItem1")]}
          imageSrc={project.images[4]}
          alt={t(project.text + ".step6.alt")}
          caption={t(project.text + ".step6.caption")}
        />
      ),
    },
    {
      component: (
        <TimeLineTextSection
          id="the-outcome"
          title={t(project.text + ".step7.title")}
          label={t(project.text + ".step7.label")}
          textItems={[
            t(project.text + ".step7.textItem1"),
            t(project.text + ".step7.textItem2")
          ]}
        />
      ),
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
