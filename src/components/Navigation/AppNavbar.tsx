import Navbar from "../../../packages/ui/Navigation/Navbar";
import { navMenu } from "./navMenu";

const AppNavbar = () => {
  return (
    <Navbar
      logoSrc="logo-dark.svg"
      logoDarkModeSrc="logo-light.svg"
      logoAlt="Åsa Eriksson logo"
      navMenu={navMenu}
    />
  );
};

export default AppNavbar;
