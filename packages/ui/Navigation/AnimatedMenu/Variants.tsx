import { useState } from "react";
import { motion } from "framer-motion";
import { sidebarVariants } from "@/lib/animations";
import Navigation from "@/ui/Navigation/AnimatedMenu/Navigation";
import MenuToggle from "@/ui/Navigation/AnimatedMenu/MenuToggle";
import styles from "./animatedMenu.module.css";
import { NavLinkProps } from "@/ui/types";

interface VariantsProps {
  children: React.ReactNode;
  navLinks: NavLinkProps[];
  locale?: string;
}

function buildHref(href: string, locale: string): string {
  if (!locale) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export default function Variants({
  children,
  navLinks,
  locale = "",
}: VariantsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center flex:0 w-[40px] h-[40px]">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={`relative w-[40px] h-[40px] ${isOpen ? styles.open : styles.closed}`}
      >
        <motion.div
          className={`${styles.background}`}
          variants={sidebarVariants}
        />
        <motion.div className={`h-16 fixed inset-0 flex items-center px-4 sm:px-6 md:px-8 z-[61]`} variants={sidebarVariants}>
          {children}

          <Navigation
            navLinks={navLinks}
            locale={locale}
            isOpen={isOpen}
            onLinkClick={() => setIsOpen(false)}
            buildHref={buildHref}
          />
        </motion.div>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </div>
  );
}
