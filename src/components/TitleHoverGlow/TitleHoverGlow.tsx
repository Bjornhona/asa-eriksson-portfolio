"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./TitleHoverGlow.module.css";

export interface TitleHoverGlowProps {
  title: string;
}

const TitleHoverGlow = ({ title = 'Title' }: TitleHoverGlowProps) => {
  const glowNumber = title.length > 3 ? title.length - 3 : 1;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(glowNumber);

  const titleChars = title.split('').map((char, index) => {
    const isHovered = hoveredIndex === index;
    const isAdjacent =
      hoveredIndex !== null &&
      (index === hoveredIndex - 1 || index === hoveredIndex + 1);

    const classNames = cn({
      [styles.hovered]: isHovered,
      [styles.hoverAdjacent]: isAdjacent,
    });
    return (
      <span key={index} data-char={char} className={classNames} onMouseOver={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
        {char}
      </span>
    );
  });

  return (
    <span className={styles.title}>{titleChars}</span>
  )
};

export default TitleHoverGlow;
