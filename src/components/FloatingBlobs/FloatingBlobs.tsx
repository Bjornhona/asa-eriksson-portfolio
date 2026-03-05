"use client";
import { MotionValue, useReducedMotion, useTransform } from "framer-motion";
import Blob from "./Blob";

interface FloatingBlobsProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function FloatingBlobs({ x, y }: FloatingBlobsProps) {
  const shouldReduceMotion = useReducedMotion();

  const slowX = useTransform(x, (value) => value * 0.4);
  const slowY = useTransform(y, (value) => value * 0.4);
  const slowestX = useTransform(x, (v) => v * 0.2);
  const slowestY = useTransform(y, (v) => v * 0.2);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Blob 1 */}
      <Blob
        className="w-[500px] h-[500px] text-cyan-400/20 top-[-100px] left-[-100px] blur-sm"
        initial={{ x: 0, y: 0 }}
        animate={shouldReduceMotion ? {} : { translateX: [0, 80, -40], translateY: [0, -60, 40] }}
        duration={35}
        color="blue"
        style={{ x, y }}
      />

      {/* Blob 2 */}
      <Blob
        className="w-[400px] h-[400px] text-purple-500/20 bottom-[-120px] right-[-80px] blur-sm"
        initial={{ x: 0, y: 0 }}
        animate={shouldReduceMotion ? {} : { translateX: [0, -60, 40], translateY: [0, 50, -50] }}
        duration={40}
        color="blue"
        style={{ x: slowX, y: slowY }}
      />

      {/* Blob 3 */}
      <Blob
        className="w-[350px] h-[350px] text-aqua-400/20 bottom-[-30px] left-[-100px] blur-[1px] drop-shadow-[0_0_80px_rgba(34,11,138,0.45)] drop-shadow-[0_0_160px_rgba(10,24,146,0.55)]"
        initial={{ x: 0, y: 0 }}
        animate={shouldReduceMotion ? {} : { translateX: [0, 50, -30], translateY: [0, -40, 30] }}
        duration={30}
        zIndex="z-10"
        color="aqua"
        style={{ x: slowestX, y: slowestY }}
      />
    </div>
  );
}
