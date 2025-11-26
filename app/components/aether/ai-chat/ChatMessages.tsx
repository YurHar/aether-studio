'use client';

import { motion } from 'framer-motion';
import type { ChatMessage } from '../type';
import { AI_CHAT_COPY } from './aiChatConfig';

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatMessages = ({
  messages,
  isLoading,
  messagesEndRef,
}: ChatMessagesProps) => {
  return (
    <motion.div
      className="flex-1 overflow-y-auto rounded-xl bg-gray-900/60 border border-gray-800 p-3 md:p-4 space-y-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.22, ease: 'easeOut' }}
    >
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.role === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-white text-black rounded-br-sm'
                : 'bg-gray-800 text-gray-100 rounded-bl-sm'
            }`}
          >
            {msg.content}
          </motion.div>
        </div>
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="bg-gray-800 text-gray-300 rounded-2xl rounded-bl-sm px-3 py-2 text-xs flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
            {AI_CHAT_COPY.thinkingLabel}
          </motion.div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </motion.div>
  );
};

export default ChatMessages;
