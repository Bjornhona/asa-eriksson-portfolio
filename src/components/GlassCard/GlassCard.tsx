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
  width = 500,
  height = 400,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 blur-3xl opacity-40 bg-blue-500/20 rounded-[10%]" />

      {/* Glass Layer */}
      <div
        className="relative h-full w-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] rounded-[10%] p-8"
      >
        {children}
      </div>
    </motion.div>
  )
}
