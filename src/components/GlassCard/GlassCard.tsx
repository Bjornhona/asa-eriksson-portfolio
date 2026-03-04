"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

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
  return (
    <motion.div
      className={`relative w-full max-w-[min(600px,calc(100vw-2rem))] min-h-[280px] sm:min-h-[360px] md:min-h-[420px] ${className}`}
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
      {/* Outer Glow */}
      <div className="absolute inset-0 blur-3xl opacity-40 bg-blue-500/20 rounded-[10%]" />

      {/* Glass Layer */}
      <div
        className="relative h-full w-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] rounded-[10%] p-4 sm:p-8 md:p-16"
      >
        {children}
      </div>
    </motion.div>
  )
}
