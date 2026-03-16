import { motion } from "framer-motion";
import { dotVariants, itemVariants } from "@/lib/animations";
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
      className={"p-2 cursor-pointer font-prompt text-lg"}
      variants={itemVariants}
      // initial="rest"
      // animate="rest"
      // whileHover="hover"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        onClick={onLinkClick}
        className="flex items-center gap-2"
      >
        <motion.span
          className="relative w-1 h-1 rounded-full bg-blue-400"
          variants={dotVariants}
          initial="rest"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300 }}
        />
          {link.label}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
