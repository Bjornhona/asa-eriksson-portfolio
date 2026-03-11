import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import styles from "./animatedMenu.module.css";
import Link from "next/link";

interface MenuItemProps {
  link: { label: string; href: string };
  href: string;
  onLinkClick: () => void;
}

const MenuItem = ({ link, href, onLinkClick }: MenuItemProps) => (
  <motion.li
    className={styles.listItem}
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={href} onClick={onLinkClick} className={styles.link}>
      {link.label}
    </Link>
  </motion.li>
);

export default MenuItem;
