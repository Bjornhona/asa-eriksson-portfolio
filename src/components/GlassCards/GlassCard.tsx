"use client"
import { motion, useSpring, useTime, useTransform } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode
  width?: number
  height?: number
  className?: string
}

export default function GlassCard({
  children,
  width,
  height,
  className = "",
}: GlassCardProps) {
  const time = useTime();
  
  const rotate = useTransform(time, [0, 9000], [0, 360], { clamp: false });
  const roratingBg = useTransform(rotate, (r) => `conic-gradient(from ${r}deg, transparent 0%,rgba(180,220,255,0.6) 50%, transparent 100%)`);

  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10});
  const pulseBg = useTransform(pulse, (p) => `blur(${p}px)`);

  useEffect(() => {
    pulse.set(10);
  }, [pulse]);

  return (
      <motion.div
        className={cn(
          `relative w-fit min-h-fit`,
          `${className}`
        )}
        style={
          width || height
            ? {
                ...(width && { maxWidth: width }),
                ...(height && { minHeight: height }),
              }
            : undefined
        }
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Glass Layer */}
        <div
          className={cn(
            "relative w-fit backdrop-blur-2xl backdrop-saturate-150 shadow-[0_0_40px_rgba(34,211,238,0.15)]",
            "bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/20 ring-1 ring-white/10",
            "rounded-md sm:rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 xl:p-12 z-10 overflow-hidden"
          )}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-20 blur-md"
            style={{
              background:
                "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.4) 40%, transparent 60%)",
            }}
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {children}
        </div>

        {/* Border Glow & Pulse 2*/}
        <motion.div className={cn(
          "absolute -inset-[1px] rounded-md sm:rounded-lg md:rounded-xl",
          "blur-2xl opacity-70 pointer-events-none"
        )} 
        style={{
          background: roratingBg,
          filter: pulseBg
        }}
        />
      </motion.div>
  )
}
