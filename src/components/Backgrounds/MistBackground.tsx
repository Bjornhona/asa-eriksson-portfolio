"use client";
import { useMounted } from "@/lib/hooks/useMounted";
import { motion } from "framer-motion";

const MistBackground = () => {
  const isMounted = useMounted();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={false}
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-purple-500) / 0.25) 0%, hsl(var(--color-purple-500) / 0) 70%)`,
        }}
        animate={isMounted ? {
            x: [0, 250, -250, 0],
            y: [0, -300, 300, 0],
          } : {}}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={false}
        className="absolute w-[900px] h-[900px] rounded-full blur-[60px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-aqua-400) / 0.30) 0%, hsl(var(--color-aqua-400) / 0) 70%)`,
        }}
        animate={isMounted ? {
          x: [-300, 300, 0, -300],
          y: [-300, 0, 300, -300],
        } : {}}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={false}
        className="absolute w-[1400px] h-[1400px] rounded-full blur-[70px]"
        style={{
          background: `radial-gradient(circle, hsl(var(--color-pink-500) / 0.18) 0%, hsl(var(--color-pink-500) / 0) 70%)`,
        }}
        animate={isMounted ? {
          x: [200, -300, -150, 200],
          y: [400, -450, 250, 400],
        } : {}}
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
