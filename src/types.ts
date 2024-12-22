
interface Message {
  sender: string;
  content: string;
}
interface ChatProps {
  friend: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export type {Message, ChatProps}