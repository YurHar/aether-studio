// app/components/aether/Manifesto.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.5'],
  });

  const words =
    'In a world of noise, we craft silence. We believe digital experiences should feel organic, not manufactured. Replacing the artificial with the ethereal.';
  const wordsArray = words.split(' ');

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="min-h-[80vh] flex items-center justify-center px-6 md:px-20 py-20 relative z-10"
    >
      <div className="max-w-4xl">
        <h2 className="serif text-3xl md:text-6xl leading-[1.2] flex flex-wrap gap-x-3 gap-y-1">
          {wordsArray.map((word, i) => {
            const base = i / wordsArray.length;
            const start = Math.max(0, base - 0.1);
            const end = Math.min(1, base + 0.15);

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.25, 1]
            );

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const color = useTransform(
              scrollYProgress,
              [start, end],
              ['rgba(148,163,184,0.7)', 'rgba(249,250,251,1)']
            );

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [6, 0]);

            return (
              <motion.span
                key={i}
                style={{ opacity, color, y }}
                className="relative will-change-transform"
              >
                {word + ' '}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </section>
  );
};

export default Manifesto;
