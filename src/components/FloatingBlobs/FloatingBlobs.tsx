"use client";
import { motion, TargetAndTransition, useReducedMotion } from "framer-motion";
import { useMemo, useId } from "react";

function Blob({
  className,
  initial,
  animate,
  duration = 30,
  zIndex = "z-0",
  color = "pink",
}: {
  className: string;
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  duration?: number;
  zIndex?: string;
  color?: string;
}) {
  const gradientId = useId();

  const blobColor = useMemo(() => {
    switch (color) {
      case "pink":
        return ["hsl(var(--color-pink-800))", "hsl(var(--color-pink-700))", "hsl(var(--color-pink-600))", "hsl(var(--color-pink-500))", "hsl(var(--color-pink-400))"];
      case "blue":
        return ["hsl(var(--color-blue-800))", "hsl(var(--color-blue-700))", "hsl(var(--color-blue-600))", "hsl(var(--color-blue-500))", "hsl(var(--color-blue-300))"];
      case "aqua":
        return ["hsl(var(--color-aqua-800))", "hsl(var(--color-aqua-700))", "hsl(var(--color-aqua-600))", "hsl(var(--color-aqua-500))", "hsl(var(--color-aqua-400))"];
      default:
        return ["hsl(var(--color-gray-800))", "hsl(var(--color-gray-700))", "hsl(var(--color-gray-600))", "hsl(var(--color-gray-500))", "hsl(var(--color-gray-400))"];
    }
  }, [color]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className} ${zIndex}`}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 600 600" className="w-full h-full">
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={`hsl(var(--color-white))`} stopOpacity="1" />
            <stop offset="5%" stopColor={`${blobColor[0]}`} stopOpacity="1" />
            <stop offset="10%" stopColor={`${blobColor[1]}`} stopOpacity="1" />
            <stop offset="50%" stopColor={`${blobColor[2]}`} stopOpacity="1" />
            <stop offset="80%" stopColor={`${blobColor[3]}`} stopOpacity="1" />
            <stop offset="95%" stopColor={`${blobColor[4]}`} stopOpacity="0.8" />
            <stop offset="100%" stopColor={`transparent`} stopOpacity="0.01" />
          </radialGradient>
        </defs>
        <path fill={`url(#${gradientId})`} d="M421.5,323Q393,396,321.5,431.5Q250,467,170,438Q90,409,79.5,329.5Q69,250,104,182Q139,114,214.5,79Q290,44,359.5,92Q429,140,435,195Q441,250,421.5,323Z" />
      </svg>
    </motion.div>
  );
}

export default function FloatingBlobs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Blob 1 */}
      <Blob
        className="w-[500px] h-[500px] text-cyan-400/20 top-[-100px] left-[-100px] blur-sm"
        initial={{ x: 0, y: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, 80, -40], y: [0, -60, 40] }}
        duration={35}
        zIndex="z-0"
        color="blue"
      />

      {/* Blob 2 */}
      <Blob
        className="w-[400px] h-[400px] text-purple-500/20 bottom-[-120px] right-[-80px] blur-sm"
        initial={{ x: 0, y: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, -60, 40], y: [0, 50, -50] }}
        duration={40}
        zIndex="z-0"
        color="blue"
      />

      {/* Blob 3 */}
      <Blob
        className="w-[350px] h-[350px] text-aqua-400/20 bottom-[-30px] left-[-100px] blur-xs"
        initial={{ x: 0, y: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, 50, -30], y: [0, -40, 30] }}
        duration={30}
        zIndex="z-20"
        color="aqua"
      />
    </div>
  );
}
