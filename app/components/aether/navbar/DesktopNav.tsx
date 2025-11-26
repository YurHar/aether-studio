'use client';

import { NavItem } from './navbarConfig';

interface DesktopNavProps {
  items: readonly NavItem[];
  onNavClick: (id: string) => void;
}

const DesktopNav = ({ items, onNavClick }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavClick(item.id)}
          className="hover:opacity-50 transition-opacity duration-300 cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default DesktopNav;
