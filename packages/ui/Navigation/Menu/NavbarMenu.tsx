"use client";
import { useState } from "react";
import type { NavMenuProps } from "../../types";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";
import LanguageSelector from "./LanguageSelector";
import SocialMediaLinks from "./SocialMediaLinks";

const NavbarMenu = ({
  modeSwitch,
  socialMediaLinks,
  navLinks,
  languages,
  locale = "",
  onLocaleChange,
}: NavMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const showLanguageSelector = languages.length > 1 && locale && onLocaleChange;

  return (
    <>
      <div className="flex items-center gap-4 text-foreground">
        {modeSwitch && <ThemeToggle />}

        {socialMediaLinks.length > 0 && <SocialMediaLinks socialMediaLinks={socialMediaLinks} />}

        {showLanguageSelector && (
          <LanguageSelector
            languages={languages}
            currentLocale={locale}
            onChange={onLocaleChange}
          />
        )}

        {navLinks.length > 0 && <BurgerMenu onToggleMenu={toggleMenu} />}
      </div>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} navLinks={navLinks} locale={locale} />
    </>
  );
};

export default NavbarMenu;
