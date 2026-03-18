import type { NavMenuProps } from "@/ui/types";
import { Home, User, Briefcase, Folder, Mail, LucideIcon } from "lucide-react";

export interface NavLink {
  labelKey: string;
  href: string;
  icon: LucideIcon;
}

export const navMenu: Omit<NavMenuProps, "navLinks"> & { navLinks: NavLink[] } = {
  languages: ["en", "sv", "es"],
  socialMediaLinks: [
    { type: "github", href: "https://github.com/bjornhona" },
    { type: "linkedin", href: "https://www.linkedin.com/in/asaeri3/" },
  ],
  modeSwitch: false,
  navLinks: [
    { labelKey: "common.home", href: "/", icon: Home },
    { labelKey: "common.about", href: "/about", icon: User },
    { labelKey: "common.services", href: "/services", icon: Briefcase },
    { labelKey: "common.portfolio", href: "/portfolio", icon: Folder },
    // { labelKey: "common.blog", href: "/blog", icon: Book },
    { labelKey: "common.contact", href: "/contact", icon: Mail },
  ],
};
