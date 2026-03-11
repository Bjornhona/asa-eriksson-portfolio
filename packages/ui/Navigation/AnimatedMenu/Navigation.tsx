import { motion } from "framer-motion";
import { navVariants } from "@/lib/animations";
import MenuItem from "@/ui/Navigation/AnimatedMenu/MenuItem";
import styles from "./animatedMenu.module.css";

interface NavigationProps {
  navLinks: { label: string; href: string }[];
  locale: string;
  onLinkClick: () => void;
  buildHref: (href: string, locale: string) => string;
}

const Navigation = ({ navLinks, locale, onLinkClick, buildHref }: NavigationProps) => (
  <motion.ul className={styles.list} variants={navVariants}>
      {navLinks.map((link) => (
          <MenuItem
            key={link.href}
            link={link}
            href={buildHref(link.href, locale)}
            onLinkClick={onLinkClick}
          />
      ))}
  </motion.ul>
)

export default Navigation;
