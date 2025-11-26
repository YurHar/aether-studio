import type { ChatMessage } from '../type';

export async function sendMessageToAI(
  message: string,
  history: ChatMessage[]
): Promise<string> {
  // Placeholder implementation.
  // Later you can swap this for a real API call (OpenAI, your backend, etc.)
  return Promise.resolve(
    "Thanks for your message! This is a placeholder AI reply. You can connect me to a real API backend later."
  );
}
