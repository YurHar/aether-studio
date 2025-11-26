"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AIChatModal from "./AIChatModal";
import GetInTouchColumn from "./footer/GetInTouchColumn";
import MapCard from "./footer/MapCard";
import FooterBottom from "./footer/FooterBottom";
import FloatingAIButton from "./footer/FloatingAIButton";
import type { CityId } from "./footer/footerConfig";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeCity, setActiveCity] = useState<CityId>("tokyo");

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);

  return (
    <>
      <footer
        id="contact"
        className="h-screen flex flex-col justify-between p-6 md:p-20 bg-gray-900/30 relative z-10 mt-20"
      >
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <GetInTouchColumn />
            <MapCard activeCity={activeCity} onCityChange={setActiveCity} />
          </div>
        </div>

        <div>
          <div className="relative inline-block">
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-none absolute -inset-x-10 -inset-y-6 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.25),_transparent_60%)] blur-3xl opacity-70"
            />
            <motion.button
              type="button"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              onClick={handleOpenChat}
              className="relative serif text-[12vw] leading-[0.8] tracking-tighter hover:text-gray-400 transition-colors cursor-pointer text-left"
            >
              LET&apos;S TALK
            </motion.button>
          </div>

          <FooterBottom />
        </div>
      </footer>

      <FloatingAIButton onOpenChat={handleOpenChat} />

      <AIChatModal isOpen={isChatOpen} onClose={handleCloseChat} />
    </>
  );
};

export default Footer;
