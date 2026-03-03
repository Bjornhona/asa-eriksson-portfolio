"use client";
import styles from "./page.module.css";
import MistBackground from "@/components/Backgrounds/MistBackground";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const title = "Åsa Eriksson";

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MistBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <main className="flex flex-col min-h-screen w-full max-w-lg flex-start justify-between px-16 py-[120px]">
          <div className={styles.intro}>
            <p>{t("home.title")}</p>
            <h1 className={styles.title}>
              <TitleHoverGlow title={title} />.</h1>
            {/* <h5 className={styles.title}>
              Frontend Developer & Product Designer
            </h5> */}
            <h2>{t("home.subtitle")}</h2>
            <h5>{t.rich("home.description", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}</h5>
            <h5>{t.rich("home.techbeachmama", {
              a: (chunks) => <a href="https://techbeachmama.com" target="_blank" rel="noopener noreferrer">{chunks}</a>
            })}</h5>
          </div>
        </main>
      </div>
      
    </div>
  );
}
