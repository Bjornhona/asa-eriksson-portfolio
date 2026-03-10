"use client";
import { motion } from "framer-motion";

interface TimeLineWrapperProps {
  children: React.ReactNode;
  last?: boolean;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}

export const TimeLineWrapper = ({
  children,
  last,
  index,
  activeIndex,
  setActiveIndex,
}: TimeLineWrapperProps) => {
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
      className="relative max-w-md mx-auto pl-12"
      onViewportEnter={() => setActiveIndex(index)}
      viewport={{ amount: 0.5, once: true, margin: "0px 0px -100px 0px" }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* vertical line */}
      <div
        className={`absolute left-4 translate-x-[5px] translate-y-16 top-0 ${last ? "bottom-16" : "bottom-0"} w-[2px] bg-blue-500`}
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--glow-char)), hsl(var(--color-blue-700)), hsl(var(--glow-char)))",
          // filter:
          //   "drop-shadow(0 0 12px hsl(var(--glow-inner))) drop-shadow(0 0 24px hsl(var(--glow-outer)))",
        }}
      />

      {/* animated dot */}
      <motion.div className="absolute left-4 top-2 w-3 h-3 rounded-full bg-aqua-500">
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
