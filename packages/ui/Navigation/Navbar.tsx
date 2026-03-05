import type { NavMenuProps } from "../types";
import Logo from "../Logo/Logo";
import NavbarMenu from "./Menu/NavbarMenu";

export interface NavbarProps {
  logoSrc: string;
  logoDarkModeSrc: string;
  logoAlt: string;
  logoLink?: string;
  navMenu: NavMenuProps;
}

const Navbar = ({ logoSrc, logoDarkModeSrc, logoAlt, logoLink, navMenu }: NavbarProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between w-full h-16 z-50 px-4 sm:px-6 md:px-8 text-foreground bg-gradient-to-b from-background/50 to-transparent">
      <Logo logoSrc={logoSrc} logoDarkModeSrc={logoDarkModeSrc} logoAlt={logoAlt} logoLink={logoLink} />
      <NavbarMenu {...navMenu} />
    </div>
  );
}

export default Navbar;
