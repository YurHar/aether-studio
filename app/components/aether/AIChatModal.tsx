'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { AIChatModalProps, ChatMessage } from './type';

import { AI_CHAT_COPY } from './ai-chat/aiChatConfig';
import { sendMessageToAI } from './ai-chat/aiChatService';
import ChatHeader from './ai-chat/ChatHeader';
import ChatMessages from './ai-chat/ChatMessages';
import ChatInput from './ai-chat/ChatInput';

const AIChatModal = ({ isOpen, onClose }: AIChatModalProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      content: AI_CHAT_COPY.initialGreeting,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(2);
  const messagesRef = useRef<ChatMessage[]>(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: idRef.current++,
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const historyForAI = [...messagesRef.current, userMessage];

    try {
      const replyText = await sendMessageToAI(trimmed, historyForAI);

      const assistantMessage: ChatMessage = {
        id: idRef.current++,
        role: 'assistant',
        content: replyText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const assistantMessage: ChatMessage = {
        id: idRef.current++,
        role: 'assistant',
        content: AI_CHAT_COPY.errorMessage,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={onClose}
        >
          {/* Soft glow behind modal */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-x-10 md:inset-x-40 h-64 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.26),_transparent_60%)] pointer-events-none"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-chat-title"
            initial={{ opacity: 0, y: 32, scale: 0.9, filter: 'blur(4px)' }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{ opacity: 0, y: 24, scale: 0.9, filter: 'blur(4px)' }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 22,
            }}
            className="relative w-full max-w-2xl rounded-2xl bg-black/85 border border-gray-700/80 p-5 md:p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)] flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-200 transition-colors"
              aria-label="Close AI chat"
            >
              <X className="h-4 w-4" />
            </button>

            <ChatHeader />

            <ChatMessages
              messages={messages}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
            />

            <ChatInput
              input={input}
              isLoading={isLoading}
              onChange={setInput}
              onSubmit={handleSubmit}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChatModal;
