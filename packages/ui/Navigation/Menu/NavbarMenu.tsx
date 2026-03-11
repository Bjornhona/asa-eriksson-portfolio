"use client";
import { useState } from "react";
import type { NavMenuProps } from "../../types";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import LanguageSelector from "./LanguageSelector";
import SocialMediaLinks from "./SocialMediaLinks";
import SafeDropdown from "../../SafeDropdown/SafeDropdown";
// import BurgerMenu from "./BurgerMenu";
import Variants from "../AnimatedMenu/Variants";

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
      <div className="flex items-center sm:gap-2 lg:gap-4 text-foreground mr-[-10px]">
        {modeSwitch && <ThemeToggle />}

        {socialMediaLinks.length > 0 && <SocialMediaLinks socialMediaLinks={socialMediaLinks} />}

        {showLanguageSelector && (
          <SafeDropdown>
            <LanguageSelector
              languages={languages}
              currentLocale={locale}
              onChange={onLocaleChange}
            />
          </SafeDropdown>
        )}

        {/* {navLinks.length > 0 && <BurgerMenu onToggleMenu={toggleMenu} />} */}
        {navLinks.length > 0 && <Variants navLinks={navLinks} locale={locale} />}
      </div>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} navLinks={navLinks} locale={locale} />
    </>
  );
};

export default NavbarMenu;
