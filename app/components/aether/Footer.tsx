'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AIChatModal from './AIChatModal';

const CHAT_HINT_TEXT = "Let's talk with Aether AI";

type City = 'tokyo' | 'newyork';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [activeCity, setActiveCity] = useState<City>('tokyo');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(CHAT_HINT_TEXT.slice(0, i + 1));
      i += 1;
      if (i >= CHAT_HINT_TEXT.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const markerPosition =
    activeCity === 'tokyo'
      ? { left: '68%', top: '38%' }
      : { left: '24%', top: '46%' };

  const cityLabel =
    activeCity === 'tokyo'
      ? {
          name: 'Tokyo, JP',
          timezone: 'JST (UTC+9)',
        }
      : {
          name: 'New York, US',
          timezone: 'EST (UTC-5 / UTC-4)',
        };

  return (
    <>
      <footer
        id="contact"
        className="h-screen flex flex-col justify-between p-6 md:p-20 bg-gray-900/30 relative z-10 mt-20"
      >
        {/* Main 2-column area */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Get in touch + text + contact */}
            <div className="flex flex-col justify-center max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
                Get in touch
              </p>
              <h2 className="serif text-4xl md:text-5xl mb-6">
                Quiet interfaces <br />
                for bold ideas.
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                We build calm, atmospheric digital products for teams who care
                about detail. Fewer distractions, more intention—and motion that
                feels more like cinema than UI.
              </p>

              <div className="mt-1 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-gray-500">
                <span className="px-3 py-1 rounded-full border border-gray-700/60 bg-black/40">
                  Interface Design
                </span>
                <span className="px-3 py-1 rounded-full border border-gray-700/60 bg-black/40">
                  Motion
                </span>
                <span className="px-3 py-1 rounded-full border border-gray-700/60 bg-black/40">
                  Prototyping
                </span>
                <span className="px-3 py-1 rounded-full border border-gray-700/60 bg-black/40">
                  Front-end
                </span>
              </div>

              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:tech@aether.studio"
                    className="hover:text-white transition-colors"
                  >
                    tech@aether.studio
                  </a>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Availability
                  </div>
                  <p>Open for select collaborations</p>
                </div>
              </div>
            </div>

            {/* Right: big dark map */}
            <div className="flex items-center justify-center mb-5">
              <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-black/50 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.9)] backdrop-blur-md">
                {/* City selector header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    Studio Map
                  </div>
                  <div className="inline-flex rounded-full bg-black/60 border border-gray-800 p-1 text-[11px] uppercase tracking-[0.2em]">
                    <button
                      type="button"
                      onClick={() => setActiveCity('tokyo')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        activeCity === 'tokyo'
                          ? 'bg-gray-100 text-black'
                          : 'text-gray-400'
                      }`}
                    >
                      Tokyo
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCity('newyork')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        activeCity === 'newyork'
                          ? 'bg-gray-100 text-black'
                          : 'text-gray-400'
                      }`}
                    >
                      New York
                    </button>
                  </div>
                </div>

                {/* Big map */}
                <div className="relative mb-4 h-56 md:h-72 w-full overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,_#020617,_#020617)]">
                  {/* grid lines */}
                  <div className="absolute inset-0 opacity-[0.25]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[length:18px_18px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.85),transparent_40%,rgba(15,23,42,0.9))]" />
                  </div>

                  {/* continents-like glow */}
                  <div className="absolute inset-0 mix-blend-screen opacity-40 bg-[radial-gradient(circle_at_20%_40%,rgba(148,163,184,0.4),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(148,163,184,0.35),transparent_55%)]" />

                  {/* marker */}
                  <motion.div
                    className="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.9)]"
                    animate={markerPosition}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    <span className="absolute inset-[-6px] rounded-full border border-emerald-400/40 opacity-60" />
                  </motion.div>

                  {/* inner vignette */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] pointer-events-none" />
                </div>

                {/* City label */}
                <div className="space-y-1 text-xs text-gray-400">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                      Current focus
                    </div>
                    <p className="text-gray-200">{cityLabel.name}</p>
                    <p className="text-[11px] text-gray-500">
                      {cityLabel.timezone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div>
          <div className="relative inline-block">
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="pointer-events-none absolute -inset-x-10 -inset-y-6 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.25),_transparent_60%)] blur-3xl opacity-70"
            />
            <motion.button
              type="button"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              onClick={() => setIsChatOpen(true)}
              className="relative serif text-[12vw] leading-[0.8] tracking-tighter hover:text-gray-400 transition-colors cursor-pointer text-left"
            >
              LET&apos;S TALK
            </motion.button>
          </div>

          <div className="w-full h-[1px] bg-gray-700 mt-10 mb-6" />

          {/* Bottom row */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Aether Studio</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/yuri-harutyunyan/"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI pill */}
      <motion.button
        type="button"
        onClick={() => setIsChatOpen(true)}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.5 }}
        className="fixed left-6 bottom-6 z-40 group"
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <div className="rounded-full border border-gray-700 bg-black/70 px-4 py-2 text-xs md:text-sm text-gray-200 flex items-center gap-2 shadow-lg backdrop-blur-sm group-hover:border-gray-400 group-hover:bg-black/80 transition-colors">
            <span className="whitespace-nowrap">
              {typedText || '\u00A0'}
            </span>
            <span className="ml-1 inline-block w-[2px] h-4 bg-gray-300 animate-pulse" />
          </div>
        </div>
      </motion.button>

      {/* AI Chat modal */}
      <AIChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Footer;
