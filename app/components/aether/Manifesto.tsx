'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ManifestoWord from './manifesto/ManifestoWord';
import { MANIFESTO_TEXT } from './manifesto/manifestoConfig';

const Manifesto = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.5'],
  });

  const wordsArray = MANIFESTO_TEXT.split(' ');
  const total = wordsArray.length;

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="min-h-[80vh] flex items-center justify-center px-6 md:px-20 py-20 relative z-10"
    >
      <div className="max-w-4xl">
        <h2 className="serif text-3xl md:text-6xl leading-[1.2] flex flex-wrap gap-x-3 gap-y-1">
          {wordsArray.map((word, i) => (
            <ManifestoWord
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </h2>
      </div>
    </section>
  );
};

export default Manifesto;
