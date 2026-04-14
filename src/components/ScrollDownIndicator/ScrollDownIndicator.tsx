"use client";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

export interface ScrollDownIndicatorProps {
  scrollToHref: string;
  indicatorText?: string;
}

const ScrollDownIndicator = ({ scrollToHref, indicatorText = "Read more" }: ScrollDownIndicatorProps) => {
  return (
    <a
      href={scrollToHref}
      className="absolute -bottom-[85px] left-1/2 -translate-x-1/2 cursor-pointer p-4"
    >
      <motion.div
        className="flex flex-col items-center text-blue-400 hover:text-blue-200 whitespace-nowrap"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
          {indicatorText} <br />
          <ChevronDownIcon className="w-4 h-4" />
      </motion.div>
    </a>
  );
};

export default ScrollDownIndicator;
