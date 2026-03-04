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
      className={`relative w-fit min-h-fit ${className}`}
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
      <div className="absolute inset-0 blur-3xl opacity-40 bg-blue-500/20 rounded-lg" />

      {/* Glass Layer */}
      <div
        className="relative w-fit backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] rounded-md sm:rounded-lg md:rounded-xl p-4 sm:p-8 md:p-16"
      >
        {children}
      </div>
    </motion.div>
  )
}
