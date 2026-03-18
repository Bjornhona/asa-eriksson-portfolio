"use client";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";

const Quote = ({ quote }: { quote: string }) => {
  return (
    <motion.div
      className="relative space-y-4 max-w-md mx-auto mb-12 md:mb-16"
      variants={container}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.span
        variants={fadeInUp}
        className="absolute inset-0 bg-gradient-to-r from-aqua-400 to-blue-500 rounded-lg blur-md opacity-80 z-0"
      />
      <motion.h4
        variants={fadeInUp}
        className="relative italic text-background z-10 p-6"
      >
        &quot;{quote}&quot;
      </motion.h4>
    </motion.div>
  );
};

export default Quote;
