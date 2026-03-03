"use client";
import styles from "./page.module.css";
import MistBackground from "@/components/Backgrounds/MistBackground";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";

export default function Home() {
  const title = "Åsa Eriksson";

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MistBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <main className="flex flex-col min-h-screen w-full max-w-lg flex-start justify-between px-16 py-[120px]">
          <div className={styles.intro}>
            <p>Hi, I’m</p>
            <h1 className={styles.title}>
              <TitleHoverGlow title={title} />.</h1>
            {/* <h5 className={styles.title}>
              Frontend Developer & Product Designer
            </h5> */}
            <h2>Engineer by profession. Designer by instinct.</h2>
            <h5>
              I build scalable web applications with <strong>React & Next.js</strong> —
              crafted with clean architecture and thoughtful <strong>user experience</strong>.
            </h5>
            <h5>Founder of <a href="https://techbeachmama.com" target="_blank" rel="noopener noreferrer">Tech Beach Mama</a> - Building resources to help women launch tech careers.</h5>
          </div>
        </main>
      </div>
      
    </div>
  );
}
