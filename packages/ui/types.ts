export type SocialMediaLinkType = "github" | "linkedin";
import { LucideIcon } from "lucide-react";
// export type SocialMediaLinkType = "github" | "linkedin" | "twitter" | "instagram" | "facebook" | "youtube" | "tiktok" | "pinterest" | "reddit" | "snapchat" | "spotify" | "soundcloud" | "twitch" | "website" | "email" | "phone" | "address" | "map" | "other";

export interface NavLinkProps {
  label: string;
  href: string;
  icon: LucideIcon;
}
export interface NavMenuProps {
  children?: React.ReactNode;
  languages: string[];
  socialMediaLinks: { type: SocialMediaLinkType; href: string }[];
  modeSwitch: boolean;
  navLinks: NavLinkProps[];
  locale?: string;
  onLocaleChange?: (locale: string) => void;
}
