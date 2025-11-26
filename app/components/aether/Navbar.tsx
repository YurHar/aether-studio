'use client';

import { useState } from 'react';
import DesktopNav from './navbar/DesktopNav';
import MobileToggleButton from './navbar/MobileToggleButton';
import MobileMenu from './navbar/MobileMenu';
import { NAV_ITEMS } from './navbar/navbarConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleNavClick = (id: string) => {
    handleScroll(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="text-xl font-bold tracking-widest uppercase">
          Aether
        </div>

        <DesktopNav items={NAV_ITEMS} onNavClick={handleNavClick} />

        <MobileToggleButton
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
        />
      </nav>

      <MobileMenu
        isOpen={isOpen}
        items={NAV_ITEMS}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Navbar;
