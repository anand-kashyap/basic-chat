
interface MessageType {
  sender: string;
  content: string;
}
interface ChatProps {
  friend: string;
  messages: MessageType[];
  onSendMessage: (content: string) => void;
}

export type {MessageType, ChatProps}