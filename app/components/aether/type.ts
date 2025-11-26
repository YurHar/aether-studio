export type AIChatModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type ChatMessage = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
};

export type PhilosophyItem = {
  title: string;
  desc: string;
};