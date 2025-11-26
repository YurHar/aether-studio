'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { AI_CHAT_COPY } from './aiChatConfig';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatInput = ({ input, isLoading, onChange, onSubmit }: ChatInputProps) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      className="mt-4 flex gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.16, duration: 0.22, ease: 'easeOut' }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder={AI_CHAT_COPY.inputPlaceholder}
        className="flex-1 rounded-full bg-gray-900/80 border border-gray-700 px-4 py-2 text-sm text-white outline-none focus:border-gray-400 focus:ring-0 transition-colors"
      />
      <motion.button
        type="submit"
        disabled={isLoading || !input.trim()}
        whileTap={{ scale: 0.94 }}
        className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer bg-white text-black shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Send message"
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>
    </motion.form>
  );
};

export default ChatInput;
