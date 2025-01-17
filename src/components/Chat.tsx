import { useEffect, useRef, useState } from 'react';
import { ChatProps } from '../types';
import MessageType from './Message';

const Chat: React.FC<ChatProps> = ({ friend, messages, onSendMessage }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      setInput('');
      inputRef.current.focus();
    }
  }, [inputRef.current, friend]);

  const handleSend = () => {
    const val = input.trim();
    if (val) {
      onSendMessage(val);
      setInput('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSend();
  };

  return (
    <div className='flex flex-col h-full p-4 bg-gray-100 rounded-lg'>
      <div className='flex flex-col flex-1 overflow-y-auto mb-4'>
        {messages.map((msg, index) => (
          <MessageType key={index} message={msg} />
        ))}
      </div>

      <div className='flex'>
        <input
          ref={inputRef}
          type='text'
          className='flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none'
          placeholder={`Message ${friend}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className='px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600' onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
