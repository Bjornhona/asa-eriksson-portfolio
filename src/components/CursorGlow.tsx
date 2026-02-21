import { useState, useEffect } from "react";
import styles from "./CursorGlow.module.css";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.log(position);

  return <div className={styles.cursorGlow} style={{ left: position.x, top: position.y }} />;
};

export default CursorGlow;
