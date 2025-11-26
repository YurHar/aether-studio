'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: y1, opacity }} className="text-center z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.4em] uppercase mb-4 text-gray-400"
        >
          Digital Experience
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="serif text-6xl md:text-9xl font-light leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600"
        >
          BEYOND <br /> REALITY
        </motion.h1>
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
