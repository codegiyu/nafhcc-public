export type NavItem = {
  label: string;
  href: string;
};

/** Lovable-aligned primary nav (P2). Gallery/Personnel remain footer-only until P5. */
export const primaryNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Estates', href: '/#estates' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Estates', href: '/#estates' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Key Personnel', href: '/agents' },
  { label: 'Contact', href: '/contact' },
];
