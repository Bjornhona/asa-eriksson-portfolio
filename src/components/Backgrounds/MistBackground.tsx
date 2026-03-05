"use client";
import { motion } from "framer-motion";

const MistBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-purple-500) / 0.25) 0%, hsl(var(--color-purple-500) / 0) 70%)`,
        }}
        animate={{
          x: [0, 950, -250, 0],
          y: [0, -300, 500, 0],
          scale: [1, 1.08, 0.96, 1],
          rotate: [0, 12, -8, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-[60px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-aqua-600) / 0.20) 0%, hsl(var(--color-aqua-600) / 0) 70%)`,
        }}
        animate={{
          x: [150, -300, 900, 150],
          y: [-200, 350, -150, -500],
          scale: [1, 1.12, 0.92, 1],
          rotate: [0, -18, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[40px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-pink-500) / 0.18) 0%, hsl(var(--color-pink-500) / 0) 70%)`,
        }}
        animate={{
          x: [-200, 900, -150, -200],
          y: [500, -250, 150, 500],
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 25, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MistBackground;
