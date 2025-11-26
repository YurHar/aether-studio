'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUp } from 'lucide-react';
import { AIChatModalProps, ChatMessage } from './type';

async function sendMessageToAI(
  message: string,
  history: ChatMessage[]
): Promise<string> {
  return Promise.resolve(
    "Thanks for your message! This is a placeholder AI reply. You can connect me to a real api backend later."
  );
}

const AIChatModal = ({ isOpen, onClose }: AIChatModalProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        "Hi, I’m the Aether AI assistant. Ask me about projects, collaboration, or anything you’d like to know.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(2);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-scroll to bottom on new messages
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

    try {
      const replyText = await sendMessageToAI(trimmed, [...messages, userMessage]);

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
        content:
          'Sorry, something went wrong while contacting the AI service. Please try again in a moment.',
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
          onClick={onClose} // click on backdrop closes
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
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Close button with lucide X */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-200 transition-colors"
              aria-label="Close AI chat"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
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
                Talk with Aether AI
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Ask anything about the studio, projects, availability or ideas.
              </p>
            </motion.div>

            {/* Chat messages */}
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
                    Aether AI is thinking…
                  </motion.div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </motion.div>

            {/* Input */}
            <motion.form
              onSubmit={handleSubmit}
              className="mt-4 flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.22, ease: 'easeOut' }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChatModal;
