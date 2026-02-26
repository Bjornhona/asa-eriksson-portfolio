export interface NavMenuProps {
  languages: string[];
  modeSwitch: boolean;
  navLinks: { label: string; href: string }[];
  locale?: string;
  onLocaleChange?: (locale: string) => void;
}
