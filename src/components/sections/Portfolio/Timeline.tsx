"use client";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import { TimelineItemType } from "@/app/[locale]/about/page";
import { useTranslations } from "next-intl";
import { CheckIcon, XIcon } from "lucide-react";
import TimeLineStep from "@/components/TimeLineWrapper/TimeLineStep";

export default function  PortfolioTimeline({
  project,
}: {
  project: PortfolioItem;
}) {
  const t = useTranslations("portfolio.work");

  const renderTextItems = (key: string): React.ReactNode[] => {
    const items = t.raw(key) as string[];
    return items.map((_, i) =>
      t.rich(`${key}.${i}`, {
        strong: (chunks) => <strong>{chunks}</strong>,
        code: (chunks) => <code>{chunks}</code>,
      })
    );
  };

  const timelineItems: TimelineItemType[] = [
    {
      component: (
        <TimeLineStep
          id="project-overview"
          title={t(project.text + ".step1.title")}
          label={t(project.text + ".step1.label")}
          textItems={renderTextItems(project.text + ".step1.textItems")}
          lists={[
            {
              subTitle: t(project.text + ".step1.challenges.title"),
              listItems: t.raw(project.text + ".step1.challenges.rows")
            },
          ]}
        />
      ),
    },
    {
      component: (
        <TimeLineStep
          id={"project-design"}
          title={t(project.text + ".step2.title")}
          label={t(project.text + ".step2.label")}
          textItems={renderTextItems(project.text + ".step2.textItems")}
          previewSrc={project.images.steps.step2?.preview}
          fullSrc={project.images.steps.step2?.full}
          alt={t(project.text + ".step2.alt")}
          caption={t(project.text + ".step2.caption")}
        />
      )
    },
    {
      component: (
        <TimeLineStep
          id="migration-and-architecture"
          title={t(project.text + ".step3.title")}
          label={t(project.text + ".step3.label")}
          textItems={renderTextItems(project.text + ".step3.textItems")}
          lists={[
            {
              subTitle: t(project.text + ".step3.solution.title"),
              listItems: t.raw(project.text + ".step3.solution.rows")
            },
          ]}
        />
      ),
    },
    {
      component: (
        <TimeLineStep
          id="the-solution-live"
          title={t(project.text + ".step4.title")}
          label={t(project.text + ".step4.label")}
          textItems={renderTextItems(project.text + ".step4.textItems")}
          previewSrc={project.images.steps.step4?.preview}
          fullSrc={project.images.steps.step4?.full}
          alt={t(project.text + ".step4.alt")}
          caption={t(project.text + ".step4.caption")}
        />
      ),
    },
    {
      component: (
        <TimeLineStep
          id="performance-and-seo"
          title={t(project.text + ".step5.title")}
          label={t(project.text + ".step5.label")}
          textItems={renderTextItems(project.text + ".step5.textItems")}
          lists={
            project.slug === "tech-beach-mama"
              ? [
                  {
                    title: t(project.text + ".step5.offerings.title"),
                    listItems: t.raw(project.text + ".step5.offerings.rows"),
                    listIcon: <CheckIcon className="w-4 h-4 text-aqua-400" />,
                  },
                ]
              : [
                  {
                    title: t(project.text + ".step5.beforeVsAfter.before.title"),
                    listItems: t.raw(project.text + ".step5.beforeVsAfter.before.rows"),
                    listIcon: <XIcon className="w-4 h-4 text-danger" />,
                  },
                  {
                    title: t(project.text + ".step5.beforeVsAfter.after.title"),
                    listItems: t.raw(project.text + ".step5.beforeVsAfter.after.rows"),
                    listIcon: <CheckIcon className="w-4 h-4 text-aqua-400" />,
                  },
                ]
          }
          previewSrc={project.images.steps.step5?.preview}
          fullSrc={project.images.steps.step5?.full}
          alt={t(project.text + ".step5.alt")}
          caption={t(project.text + ".step5.caption")}
        />
      ),
    },
    {
      component: (
        <TimeLineStep
          id="content-management-system"
          title={t(project.text + ".step6.title")}
          label={t(project.text + ".step6.label")}
          textItems={renderTextItems(project.text + ".step6.textItems")}
          previewSrc={project.images.steps.step6?.preview}
          fullSrc={project.images.steps.step6?.full}
          alt={t(project.text + ".step6.alt")}
          caption={t(project.text + ".step6.caption")}
        />
      ),
    },
    {
      component: (
        <TimeLineStep
          id="the-outcome"
          title={t(project.text + ".step7.title")}
          label={t(project.text + ".step7.label")}
          textItems={renderTextItems(project.text + ".step7.textItems")}
          lists={[
            {
              subTitle: t(project.text + ".step7.results.title"),
              listItems: t.raw(project.text + ".step7.results.rows"),
              listIcon: <CheckIcon className="w-4 h-4 text-aqua-400" />,
            },
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
          last={item.last}
        >
          {item.component}
        </TimeLineWrapper>
      ))}
    </>
  );
}
