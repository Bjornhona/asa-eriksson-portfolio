"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export interface TimeLineWrapperProps {
  children: React.ReactNode;
  last?: boolean;
  index: number;
  // activeIndex: number;
  // setActiveIndex: (i: number) => void;
}

export const TimeLineWrapper = ({
  children,
  last,
  index,
  // activeIndex,
  // setActiveIndex,
}: TimeLineWrapperProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isActive = index === activeIndex;

  const activeDot = {
    scale: [1, 1.35, 1],
    filter:
      "drop-shadow(0 0 12px hsl(var(--glow-inner))) drop-shadow(0 0 24px hsl(var(--glow-outer)))",
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  };
  const unactiveDot = {
    filter: "none",
    scale: 1,
  };

  return (
    <motion.div
      className="relative max-w-md mx-auto pl-8 sm:pl-12 md:pl-14 my-16"
      onViewportEnter={() => setActiveIndex(index)}
      viewport={{ amount: 0.5, once: true }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* vertical line */}
      <div
        className={`absolute left-0 translate-x-[5px] translate-y-12 top-0 ${last ? "bottom-12" : "bottom-0"} w-[2px] bg-blue-500`}
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--glow-char)), hsl(var(--color-blue-700)), hsl(var(--glow-char)))",
          // filter:
          //   "drop-shadow(0 0 12px hsl(var(--glow-inner))) drop-shadow(0 0 24px hsl(var(--glow-outer)))",
        }}
      />

      {/* animated dot */}
      <motion.div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-aqua-500">
        <motion.div
          className="absolute inset-0 rounded-full bg-[hsl(var(--glow-char))]"
          animate={isActive ? activeDot : unactiveDot}
          transition={{ duration: 0.35 }}
        />
      </motion.div>
      
      {children}
    </motion.div>
  );
};
