"use client";
import { motion, MotionStyle, TargetAndTransition } from "framer-motion";
import { useId, useMemo } from "react";

const Blob = ({
  className,
  initial,
  animate,
  duration = 30,
  zIndex = "z-0",
  color = "pink",
  style
}: {
  className: string;
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  duration?: number;
  zIndex?: string;
  color?: string;
  style: MotionStyle;
}) => {
  const gradientId = useId();

  const blobColor = useMemo(() => {
    switch (color) {
      case "pink":
        return ["hsl(var(--color-pink-400))", "hsl(var(--color-pink-500))", "hsl(var(--color-pink-600))", "hsl(var(--color-pink-700))", "hsl(var(--color-pink-800))"];
      case "blue":
        return ["hsl(var(--color-blue-400))", "hsl(var(--color-blue-500))", "hsl(var(--color-blue-600))", "hsl(var(--color-blue-700))", "hsl(var(--color-blue-800))"];
      case "aqua":
        return ["hsl(var(--color-aqua-400))", "hsl(var(--color-aqua-500))", "hsl(var(--color-aqua-600))", "hsl(var(--color-aqua-700))", "hsl(var(--color-aqua-800))"];
      default:
        return ["hsl(var(--color-gray-400))", "hsl(var(--color-gray-500))", "hsl(var(--color-gray-600))", "hsl(var(--color-gray-700))", "hsl(var(--color-gray-800))"];
    }
  }, [color]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className} ${zIndex}`}
      initial={initial}
      style={style}
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

export default Blob;
