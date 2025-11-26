"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CHAT_HINT_TEXT } from "./footerConfig";

interface FloatingAIButtonProps {
  onOpenChat: () => void;
}

const FloatingAIButton = ({ onOpenChat }: FloatingAIButtonProps) => {
  const [typedText, setTypedText] = useState("");

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
    <motion.button
      type="button"
      onClick={onOpenChat}
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.5 }}
      className="fixed left-6 bottom-6 z-40 group"
    >
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
        <div className="rounded-full border border-gray-700 bg-black/70 px-4 py-2 text-xs md:text-sm text-gray-200 flex items-center gap-2 shadow-lg backdrop-blur-sm group-hover:border-gray-400 group-hover:bg-black/80 transition-colors">
          <span className="whitespace-nowrap">
            {typedText || "\u00A0"}
          </span>
          <span className="ml-1 inline-block w-[2px] h-4 bg-gray-300 animate-pulse" />
        </div>
      </div>
    </motion.button>
  );
};

export default FloatingAIButton;
