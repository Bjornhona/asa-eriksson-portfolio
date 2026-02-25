"use client";
import { useState } from "react";
import { Globe } from "lucide-react";
import { NavMenuProps } from "@/components/Navigation/navMenu";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";

const NavbarMenu = ({ languages, modeSwitch, navLinks }: NavMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="flex items-center gap-4 text-foreground">
        {modeSwitch && <ThemeToggle />}

        {/* Language Switch */}
        {languages.length > 1 && (
          <button className="p-2 rounded hover:bg-muted/20 transition">
            <Globe className="w-5 h-5" />
          </button>)}

        {navLinks.length > 0 && (
          <BurgerMenu onToggleMenu={toggleMenu} />)}
      </div>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} navLinks={navLinks} />
    </>
  );
};

export default NavbarMenu;
