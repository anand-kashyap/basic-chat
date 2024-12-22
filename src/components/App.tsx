import React, { useState } from 'react';
import Chat from './Chat';
import { Message } from '../types';

const friends = ['Alice', 'Bob', 'Charlie'];

const getInitialMessages = () => friends.reduce((acc, friend) => ({
  ...acc,
  [friend]: [
    { sender: friend, content: `Hi, this is ${friend}!` },
    { sender: friend, content: "How are you?" },
  ],
}), {});

const App: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<string>(friends[0]);
  const [chatData, setChatData] = useState<{ [key: string]: Message[] }>(getInitialMessages);

  const handleSendMessage = (content: string) => {
    setChatData((prev) => ({
      ...prev,
      [selectedFriend]: [...prev[selectedFriend], { sender: 'me', content }],
    }));
  };

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='w-full md:w-1/4 p-4 bg-gray-200 border-b md:border-r md:border-b-0'>
        <h2 className='mb-4 text-lg font-bold'>Friends</h2>
        <ul>
          {friends.map((friend) => (
            <li
              key={friend}
              className={`p-2 cursor-pointer rounded-lg ${
                selectedFriend === friend ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
              }`}
              onClick={() => setSelectedFriend(friend)}
            >
              {friend}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-1 flex flex-col p-4'>
        <h2 className='mb-4 text-lg font-bold'>Chat with {selectedFriend}</h2>
        <div className='flex-1 overflow-hidden'>
          <Chat friend={selectedFriend} messages={chatData[selectedFriend]} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
