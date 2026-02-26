'use client';
import styles from "./page.module.css";
import MistBackground from "@/components/Backgrounds/MistBackground";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";

export default function Home() {
  const name = 'Åsa Eriksson';
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MistBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <main className="flex flex-col min-h-screen w-full max-w-lg flex-start justify-between px-16 py-[120px]">
          <div className={styles.intro}>
            <TitleHoverGlow title={name} />
            <h5 className={styles.title}>Design-driven Frontend Engineer</h5>
          </div>
          <div className={styles.ctas}>
            <a className={styles.primary} href="https://github.com/asaeriksson" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className={styles.secondary} href="https://linkedin.com/in/asaeriksson" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
