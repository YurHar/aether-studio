'use client';

import { motion } from 'framer-motion';
import { AI_CHAT_COPY } from './aiChatConfig';

const ChatHeader = () => {
  return (
    <motion.div
      className="mb-4 pr-6"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.2, ease: 'easeOut' }}
    >
      <h3
        id="ai-chat-title"
        className="serif text-xl md:text-2xl tracking-tight mb-1"
      >
        {AI_CHAT_COPY.title}
      </h3>
      <p className="text-xs md:text-sm text-gray-400">
        {AI_CHAT_COPY.subtitle}
      </p>
    </motion.div>
  );
};

export default ChatHeader;
