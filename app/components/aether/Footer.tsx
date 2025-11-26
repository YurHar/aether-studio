'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AIChatModal from './AIChatModal';

const CHAT_HINT_TEXT = "Let's talk with Aether AI";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [typedText, setTypedText] = useState('');

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

  return (
    <>
      <footer
        id="contact"
        className="h-screen flex flex-col justify-between p-6 md:p-20 bg-gray-900/30 relative z-10 mt-20"
      >
        <div className="flex justify-between items-start">
          <div className="text-xs uppercase tracking-widest">Get in touch</div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-widest mb-1">
              Location
            </div>
            <div className="serif text-xl italic text-gray-400">
              Tokyo / New York
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-16 mb-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                We build quiet, atmospheric interfaces for teams who care about
                detail. Calm visuals, precise motion, and experiences that feel
                more like film than software.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-gray-500">
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
            </div>

            <div className="flex flex-col gap-5 text-sm text-gray-400 md:items-end">
              <div className="text-left md:text-right">
                <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                  Email
                </div>
                <a
                  href="mailto:hello@aether.studio"
                  className="hover:text-white transition-colors"
                >
                  tech@aether.studio
                </a>
              </div>
              <div className="text-left md:text-right">
                <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                  Availability
                </div>
                <p>Open for select collaborations</p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                  Timezone
                </div>
                <p>GMT+4 / JST / EST friendly</p>
              </div>
            </div>
          </div>

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

      <AIChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Footer;
