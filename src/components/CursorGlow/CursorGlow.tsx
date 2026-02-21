"use client";

import { useEffect, useState, type CSSProperties } from "react";
import styles from "./CursorGlow.module.css";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let animationFrameId: number;
  
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };
  
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setScale(target.closest("a, button") ? 2.5 : 1);
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);  

  return (
    <div
      className={styles.cursorGlow}
      style={{
        "--cursor-x": `${position.x}px`,
        "--cursor-y": `${position.y}px`,
        "--cursor-scale": `${scale}`,
      } as CSSProperties}
    />
  );
};

export default CursorGlow;
