"use client";
import { MotionConfig } from "framer-motion";

/**
 * The shared variants in `src/lib/animations.ts` move elements 20–24px and do
 * not check `prefers-reduced-motion`. Rather than change them for the whole
 * site, this wraps the page so Framer Motion reduces transforms for users who
 * have asked for it (WCAG 2.3.3). Context reaches the client sections nested
 * inside even though they arrive as server-rendered children.
 */
const PageMotion = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default PageMotion;
