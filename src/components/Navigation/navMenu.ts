export interface NavMenuProps {
  languages: string[];
  modeSwitch: boolean;
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const navMenu: NavMenuProps = {
  languages: ['en', 'sv', 'es'],
  modeSwitch: true,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
}
