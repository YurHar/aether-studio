'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { NavItem } from './navbarConfig';

interface MobileMenuProps {
  isOpen: boolean;
  items: readonly NavItem[];
  onNavClick: (id: string) => void;
}

const MobileMenu = ({ isOpen, items, onNavClick }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="text-2xl tracking-[0.2em] uppercase text-gray-200 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: 0.05 * index }}
              >
                {item.label}
              </motion.button>
            ))}

            <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-gray-500">
              Scroll into the atmosphere
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
