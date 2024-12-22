import { FC } from 'react'
import type { MessageType } from '../types'

type MessageProps = {
  message: MessageType
}

const MessageType: FC<MessageProps> = ({message}) => {
  return (
    <div className={`mb-2 ${message.sender === 'me' ? 'my-message md:ml-36' : 'md:mr-36'}`}>
    <div
      className={`inline-block px-4 py-2 rounded-lg text-white ${
        message.sender === 'me' ? 'bg-blue-500' : 'bg-gray-500'
      }`}
    >
      {message.content}
    </div>
  </div>
  )
}

export default MessageType