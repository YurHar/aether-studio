export const NAV_ITEMS = [
  { label: 'Manifesto', id: 'manifesto' },
  { label: 'Works', id: 'works' },
  { label: 'Philosophy', id: 'philosophy' },
  { label: 'Contact', id: 'contact' },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
