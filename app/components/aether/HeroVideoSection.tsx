// app/components/aether/HeroVideoSection.tsx
"use client";

import { motion } from "framer-motion";

const HeroVideoSection = () => {
  return (
    <section className="relative px-0 md:px-20 mt-[3rem] mb-24 z-0">
      <div className="relative w-full mx-auto rounded-[2.5rem] overflow-hidden">
        <motion.video
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[45vh] md:h-[60vh] object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>

        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.25),_transparent_60%)] mix-blend-screen opacity-40" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end md:items-center justify-between px-6 md:px-10 pb-6 md:pb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 mb-2">
              AETHER STUDIO
            </p>
            <h3 className="serif text-xl md:text-3xl text-gray-100 max-w-md">
              Atmospheres before interfaces.
            </h3>
          </div>
          <p className="hidden md:block text-xs text-gray-300 max-w-xs text-right">
            Background film sets the tone—subtle, slow, and never louder than
            the story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
