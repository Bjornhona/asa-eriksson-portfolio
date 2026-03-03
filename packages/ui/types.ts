export type SocialMediaLinkType = "github" | "linkedin";
// export type SocialMediaLinkType = "github" | "linkedin" | "twitter" | "instagram" | "facebook" | "youtube" | "tiktok" | "pinterest" | "reddit" | "snapchat" | "spotify" | "soundcloud" | "twitch" | "website" | "email" | "phone" | "address" | "map" | "other";
export interface NavMenuProps {
  languages: string[];
  socialMediaLinks: { type: SocialMediaLinkType; href: string }[];
  modeSwitch: boolean;
  navLinks: { label: string; href: string }[];
  locale?: string;
  onLocaleChange?: (locale: string) => void;
}
