"use client";
import { motion } from "framer-motion";

const MistBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-blue-500) / 0.3) 0%, hsl(var(--color-blue-500) / 0) 70%)`,
        }}
        animate={{
          x: [0, 350, -250, 0],
          y: [0, -300, 200, 0],
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
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[60px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-purple-500) / 0.25) 0%, hsl(var(--color-purple-500) / 0) 70%)`,
        }}
        animate={{
          x: [150, -300, 200, 150],
          y: [-100, 250, -150, -100],
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
        className="absolute w-[700px] h-[700px] rounded-full blur-[50px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-aqua-500) / 0.2) 0%, hsl(var(--color-aqua-500) / 0) 70%)`,
        }}
        animate={{
          x: [-200, 300, -150, -200],
          y: [200, -250, 150, 200],
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 25, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MistBackground;
