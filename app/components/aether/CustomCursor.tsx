'use client';

import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-100 mix-blend-difference hidden md:block"
      style={{ x: mouseX, y: mouseY }}
    />
  );
}
