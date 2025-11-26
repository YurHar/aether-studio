// app/components/aether/Navbar.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = ['Manifesto', 'Works', 'Philosophy', 'Contact'] as const;

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

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
          {SECTIONS.map((item) => {
            const id = item.toLowerCase();

            return (
              <button
                key={item}
                onClick={() => handleNavClick(id)}
                className="hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-sm"
          >
            {/* 3 lines transform to X */}
            <motion.span
              initial={false}
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute h-[1.5px] w-4 bg-white"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              initial={false}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute h-[1.5px] w-4 bg-white"
              transition={{ duration: 0.15 }}
            />
            <motion.span
              initial={false}
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="absolute h-[1.5px] w-4 bg-white"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {SECTIONS.map((item, index) => {
                const id = item.toLowerCase();

                return (
                  <motion.button
                    key={item}
                    onClick={() => handleNavClick(id)}
                    className="text-2xl tracking-[0.2em] uppercase text-gray-200 hover:text-white transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                  >
                    {item}
                  </motion.button>
                );
              })}

              <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-gray-500">
                Scroll into the atmosphere
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
