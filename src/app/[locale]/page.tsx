"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import TitleHoverGlow from "@/components/TitleHoverGlow/TitleHoverGlow";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/GlassCards/GlassCard";
import { Button } from "@/ui";
import { fadeInUp, container } from "@/lib/animations";
import dynamic from "next/dynamic";

const FloatingBlobs = dynamic(
  () => import("@/components/FloatingBlobs/FloatingBlobs"),
  { ssr: false }
);

export default function Home() {
  const t = useTranslations();
  const title = `${t("home.title")} Åsa Eriksson.`;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <main className="flex flex-col min-h-screen w-full max-w-md flex-start justify-center">
          <GlassCard>
            <motion.div
              className="flex flex-col items-start text-left space-y-3"
              variants={container}
              initial="initial"
              animate="animate"
            >
              <motion.h1 variants={fadeInUp}>
                <TitleHoverGlow title={title} />
              </motion.h1>
              <motion.h4 variants={fadeInUp}>{t("home.subtitle")}</motion.h4>
              <motion.h6 variants={fadeInUp}>
                {t.rich("home.description", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </motion.h6>
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
              <div className="flex gap-4">
                <Button
                  href="/portfolio"
                  className="hover:bg-aqua-500/20"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  variant="glass"
                  aria-label="Got to Portfolio"
                >
                  View My Work
                </Button>
                <Button
                  href="/services"
                  className="hover:bg-aqua-500/20"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  variant="glass"
                  aria-label="Go to Services"
                >
                  Hire Me
                </Button>
              </div>
            </motion.div>
          </GlassCard>
        </main>
      </div>
    </div>
  );
}
