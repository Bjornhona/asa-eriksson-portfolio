import { motion } from "framer-motion";
import { navVariants } from "@/lib/animations";
import MenuItem from "@/ui/Navigation/AnimatedMenu/MenuItem";
import { NavLinkProps } from "@/ui/types";
interface NavigationProps {
  navLinks: NavLinkProps[];
  locale: string;
  isOpen: boolean;
  onLinkClick: () => void;
  buildHref: (href: string, locale: string) => string;
}

const Navigation = ({
  navLinks,
  locale,
  isOpen,
  onLinkClick,
  buildHref,
}: NavigationProps) => (
  <motion.ul
    className="fixed top-0 left-[50%] transform -translate-x-1/2 px-4 sm:px-6 md:px-8 pt-24 pb-6 w-[500px] max-w-[85vw]"
    variants={navVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    // animate="open"
  >
    {navLinks.map((link) => (
      <MenuItem
        key={link.href}
        link={link}
        href={buildHref(link.href, locale)}
        onLinkClick={onLinkClick}
      />
    ))}
  </motion.ul>
);

export default Navigation;
