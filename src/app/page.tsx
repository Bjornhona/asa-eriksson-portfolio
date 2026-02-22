import styles from "./page.module.css";
import Logo from "@/components/Logo/Logo";
import MistBackground from "@/components/MistBackground/MistBackground";
import LiquidBackground from "@/components/MistBackground/LiquidBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MistBackground />
      <LiquidBackground />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <main className="flex flex-col min-h-screen w-full max-w-lg flex-start justify-between px-16 py-[120px]">
          <Logo />
          <div className={styles.intro}>
            <h1 className={styles.name}>Åsa Eriksson</h1>
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
