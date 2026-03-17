import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import Link from "next/link";
import { NavLinkProps } from "@/ui/types";

interface MenuItemProps {
  link: NavLinkProps;
  href: string;
  onLinkClick: () => void;
}

const MenuItem = ({ link, href, onLinkClick }: MenuItemProps) => {
  return (
    <motion.li
      className="relative p-2 cursor-pointer font-prompt text-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        onClick={onLinkClick}
        className="flex items-center justify-center gap-2"
      >
        {link.label}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
