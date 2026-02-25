import { NavMenuProps } from "@/components/Navigation/navMenu";
import Logo from "../Logo/Logo";
import NavbarMenu from "./Menu/NavbarMenu";

export interface NavbarProps {
  logoSrc: string;
  logoDarkModeSrc: string;
  logoAlt: string;
  navMenu: NavMenuProps;
}

const Navbar = ({ logoSrc, logoDarkModeSrc, logoAlt, navMenu }: NavbarProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between w-full h-16 z-50 px-6">
      <Logo logoSrc={logoSrc} logoDarkModeSrc={logoDarkModeSrc} logoAlt={logoAlt} />
      <NavbarMenu {...navMenu} />
    </div>
  );
}

export default Navbar;
