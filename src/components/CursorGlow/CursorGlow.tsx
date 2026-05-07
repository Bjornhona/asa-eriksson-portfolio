"use client";
import { useEffect, useRef } from "react";
import styles from "./CursorGlow.module.css";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const el = glowRef.current;
    if (!el) return;

    el.style.setProperty("--cursor-x", "-100px");
    el.style.setProperty("--cursor-y", "-100px");
    el.style.setProperty("--cursor-scale", "1");

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty("--cursor-x", `${e.clientX}px`);
        el.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      el.style.setProperty("--cursor-scale", target.closest("a, button") ? "2.5" : "1");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={glowRef} className={styles.cursorGlow} />;
};

export default CursorGlow;
