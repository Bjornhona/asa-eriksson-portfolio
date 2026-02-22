"use client";
import { motion } from "framer-motion";

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Base gradient layer */}
      <motion.div
        className="absolute inset-[-20%]"
        style={{
          background: `
            radial-gradient(40% 40% at 30% 30%, hsl(var(--color-blue-300) / 0.35) 0%, transparent 70%),
            radial-gradient(35% 35% at 70% 60%, hsl(var(--color-purple-500) / 0.30) 0%, transparent 70%),
            radial-gradient(45% 45% at 50% 80%, hsl(var(--color-aqua-500) / 0.25) 0%, transparent 70%)
          `
        }}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -80, 0],
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 8, -5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Moving soft blob overlay */}
      <motion.div
        className="absolute w-[1400px] h-[1400px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--color-blue-400) / 0.25) 0%, transparent 70%)"
        }}
        animate={{
          x: [0, 300, -200, 0],
          y: [0, -200, 150, 0],
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 15, -10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle animated noise layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')"
        }}
        animate={{
          opacity: [0.04, 0.07, 0.04]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
