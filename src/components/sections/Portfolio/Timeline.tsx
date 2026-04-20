"use client";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("portfolio.work");

  const timelineItems: TimelineItemType[] = [
    {
      component: (
        <TimeLineStep
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
          lists={[
            {
              subTitle: t(project.text + ".step1.challenges.title"),
              listItems: [
                t(project.text + ".step1.challenges.frequentIssues"),
                t(project.text + ".step1.challenges.increasingMaintenance"),
                t(project.text + ".step1.challenges.performanceLimitations"),
                t(project.text + ".step1.challenges.difficultContentManagement"),
              ],
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
          textItems={[t(project.text + ".step2.textItem1")]}
          imageSrc={project.images.steps.step2?.preview}
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
          textItems={[
            t(project.text + ".step3.textItem1"),
            t(project.text + ".step3.textItem2")
          ]}
          lists={[
            {
              subTitle: t(project.text + ".step3.solution.title"),
              listItems: [
                t(project.text + ".step3.solution.removedDependency"),
                t(project.text + ".step3.solution.introducedStructuredContent"),
                t(project.text + ".step3.solution.builtCustomFrontend"),
                t(project.text + ".step3.solution.implementedResponsiveLayout"),
                t(project.text + ".step3.solution.addedSubtleAnimations"),
              ],
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
          textItems={[t(project.text + ".step4.textItem1")]}
          imageSrc={project.images.steps.step4?.preview}
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
          textItems={[
            t(project.text + ".step5.textItem1"),
            t.rich(project.text + ".step5.textItem2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            }),
          ]}
          lists={[
            {
              title: t(project.text + ".step5.beforeVsAfter.before.title"),
              listItems: [
                t(project.text + ".step5.beforeVsAfter.before.pluginHeavyWordPressSetup"),
                t(project.text + ".step5.beforeVsAfter.before.recurringMaintenanceIssues"),
                t(project.text + ".step5.beforeVsAfter.before.slowerPerformance"),
                t(project.text + ".step5.beforeVsAfter.before.limitedFlexibility"),
              ],
              listIcon: <XIcon className="w-4 h-4 text-danger" />,
            },
            {
              title: t(project.text + ".step5.beforeVsAfter.after.title"),
              listItems: [
                t(project.text + ".step5.beforeVsAfter.after.lightweightCustomArchitecture"),
                t(project.text + ".step5.beforeVsAfter.after.stablePredictableSetup"),
                t(project.text + ".step5.beforeVsAfter.after.optimizedPerformance"),
                t(project.text + ".step5.beforeVsAfter.after.fullControlOverFrontendAndContent"),
              ],
              listIcon: <CheckIcon className="w-4 h-4 text-aqua-400" />,
            },
          ]}
          imageSrc={project.images.steps.step5?.preview}
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
          textItems={[t(project.text + ".step6.textItem1")]}
          imageSrc={project.images.steps.step6?.preview}
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
          textItems={[
            t(project.text + ".step7.textItem1"),
            t(project.text + ".step7.textItem2")
          ]}
          lists={[
            {
              subTitle: t(project.text + ".step7.results.title"),
              listItems: [
                t(project.text + ".step7.results.fasterLoadTimes"),
                t(project.text + ".step7.results.improvedCoreWebVitals"),
                t(project.text + ".step7.results.cleanerMaintainableCodebase"),
                t(project.text + ".step7.results.easierContentManagement"),
                t(project.text + ".step7.results.reducedLongTermMaintenance"),
              ],
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
