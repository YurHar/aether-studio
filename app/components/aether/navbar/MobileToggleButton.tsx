'use client';

import { motion } from 'framer-motion';

interface MobileToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileToggleButton = ({ isOpen, onToggle }: MobileToggleButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={onToggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-sm md:hidden"
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
  );
};

export default MobileToggleButton;
