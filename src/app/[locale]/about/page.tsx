"use client";
import { useState } from "react";
import { TimeLineWrapper } from "@/components/TimeLineWrapper/TimeLineWrapper";
import AboutHeroSection from "@/components/sections/About/Hero";
import AboutBackgroundSection from "@/components/sections/About/Background";
import AboutWhatIDoSection from "@/components/sections/About/WhatIDo";
import AboutApproachSection from "@/components/sections/About/Approach";
import AboutQuoteSection from "@/components/sections/About/Quote";
import AboutContactSection from "@/components/sections/About/Contact";
import AboutWorkedWithSection from "@/components/sections/About/WorkedWith";
import AboutExperienceSection from "@/components/sections/About/Experience";
import AboutCtaAndCVSection from "@/components/sections/About/CtaAndCV";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineItems = [
    {
      component: <AboutBackgroundSection />,
    },
    {
      component: <AboutWhatIDoSection />,
    },
    {
      component: <AboutApproachSection />,
    },
    {
      component: <AboutQuoteSection />,
    },
    {
      component: <AboutContactSection />,
    },
    {
      component: <AboutWorkedWithSection />,
    },
    {
      component: <AboutExperienceSection />,
      last: true,
    },
  ];

  return (
    <div className="relative container max-w-full pt-[64px] pb-16">
      <AboutHeroSection />

      {timelineItems.map((item, index) => (
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

      <AboutCtaAndCVSection />
    </div>
  );
};

export default AboutPage;
