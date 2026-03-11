import { useState } from "react";
import { motion } from "framer-motion";
import { sidebarVariants } from "@/lib/animations";
import Navigation from "@/ui/Navigation/AnimatedMenu/Navigation";
import MenuToggle from "@/ui/Navigation/AnimatedMenu/MenuToggle";
import styles from "./animatedMenu.module.css";

interface VariantsProps {
  navLinks: { label: string; href: string }[];
  locale?: string;
}

function buildHref(href: string, locale: string): string {
  if (!locale) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export default function Variants({ navLinks, locale = "" }: VariantsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={styles.nav}
      >
        <motion.div className={styles.background} variants={sidebarVariants} />
        <Navigation
          navLinks={navLinks}
          locale={locale}
          onLinkClick={() => setIsOpen(false)}
          buildHref={buildHref}
        />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </div>
  );
}
