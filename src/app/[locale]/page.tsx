"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./page.module.css";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import { useTranslations } from "next-intl";
import FloatingBlobs from "@/components/FloatingBlobs/FloatingBlobs";
import GlassCard from "@/components/GlassCard/GlassCard";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  const t = useTranslations();
  const title = "Åsa Eriksson";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;

    const rect = target.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(centerX);
    mouseY.set(centerY);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingBlobs x={springX} y={springY} />
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-8">
        <main className="flex flex-col min-h-screen w-full max-w-lg flex-start justify-center mt-24 mb-24">
          <GlassCard>
            <motion.div
              className="flex flex-col items-start text-left gap-3 sm:gap-6"
              variants={container}
              initial="initial"
              animate="animate"
            >
              <motion.p variants={fadeInUp}>{t("home.title")}</motion.p>
              <motion.h1 className={styles.title} variants={fadeInUp}>
                <TitleHoverGlow title={title} />.
              </motion.h1>
              <motion.h2 variants={fadeInUp}>{t("home.subtitle")}</motion.h2>
              <motion.h5 variants={fadeInUp}>
                {t.rich("home.description", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </motion.h5>
              <motion.p variants={fadeInUp}>
                {t.rich("home.techbeachmama", {
                  a: (chunks) => (
                    <a
                      href="https://techbeachmama.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/portfolio"
                  className="btn"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  View My Work
                </Link>
                <Link
                  href="/services"
                  className="btn"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </GlassCard>
        </main>
      </div>
    </div>
  );
}
