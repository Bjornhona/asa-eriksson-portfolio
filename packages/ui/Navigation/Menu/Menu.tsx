import { AnimatePresence, motion } from "framer-motion";

export interface MenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  navLinks: { label: string; href: string }[];
  locale?: string;
}

function buildHref(href: string, locale: string): string {
  if (!locale) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

const Menu = ({ menuOpen, toggleMenu, navLinks, locale = "" }: MenuProps) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background/95 text-foreground backdrop-blur-md overflow-auto flex flex-col items-center justify-start py-24 px-6"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 p-2 rounded hover:bg-muted/20"
          >
            Close
          </button>

          <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={buildHref(link.href, locale)}
                  onClick={toggleMenu}
                  className="hover:text-accent transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
