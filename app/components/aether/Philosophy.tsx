'use client';

import { motion } from 'framer-motion';
import {
  PHILOSOPHY_ITEMS,
} from './philosophy/philosophyConfig';
import { PhilosophyItem } from './type';

const DesktopPhilosophyCard = ({ title, desc }: PhilosophyItem) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="border-l border-gray-800 pl-8 py-2 hover:border-white transition-colors duration-500"
  >
    <h3 className="text-2xl mb-2 font-light uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-gray-500 text-lg serif italic">{desc}</p>
  </motion.article>
);

const MobilePhilosophyCard = ({ title, desc }: PhilosophyItem) => (
  <article
    className="
      min-w-[80%]
      snap-start
      border border-gray-800/70
      rounded-2xl
      px-6 py-6
      bg-black/40
      backdrop-blur-sm
      shadow-[0_18px_50px_rgba(0,0,0,0.8)]
    "
  >
    <h3 className="text-xl mb-3 font-light uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed serif italic">
      {desc}
    </p>
  </article>
);

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="py-20 border-t border-gray-900 relative z-10 bg-[#050505]"
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-10 md:mb-0 md:sticky md:top-32 h-fit">
          <h2 className="serif text-5xl mb-6">
            Our Core <br />
            <span className="italic text-gray-500">Philosophy</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            We strip away the unnecessary to reveal the essential. Every pixel
            serves a purpose; every motion tells a story.
          </p>
        </div>

        <div className="md:w-2/3 md:pl-20">
          <div className="hidden md:flex flex-col gap-16">
            {PHILOSOPHY_ITEMS.map((item) => (
              <DesktopPhilosophyCard
                key={item.title}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          <div className="md:hidden -mx-6 px-6">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
              {PHILOSOPHY_ITEMS.map((item) => (
                <MobilePhilosophyCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              Swipe left / right to explore our principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
