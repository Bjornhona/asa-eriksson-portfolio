import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

const ScrollDownIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-50 left-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="text-aqua-400 flex flex-col items-center justify-center -translate-x-1/2">
        Read more <br />
        <ChevronDownIcon className="w-4 h-4" />
      </span>
    </motion.div>
  );
};

export default ScrollDownIndicator;
