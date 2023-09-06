import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';

import './ChatWindow.css';

const ChatWindow = ({ sender, receiver }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleSendMessage = (message) => {
    const newMessage = {
      sender,
      receiver,
      message,
      timestamp: Date.now(),
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
  };

  const handleDeleteMessage = (timestamp) => {
    const updatedMessages = messages.filter(message => message.timestamp !== timestamp);
    setMessages(updatedMessages);
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
  };

  return (
    <div className="chat-window">
      <h2>Chat Window</h2>
      {messages.map((message, index) => (
        <div
          key={index}
          className="chat-message"
          onDoubleClick={() => handleDeleteMessage(message.timestamp)}
        >
          <strong>{message.sender}: </strong>
          {message.message}
        </div>
      ))}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

ChatWindow.propTypes = {
  sender: PropTypes.string.isRequired,
  receiver: PropTypes.string.isRequired
};

export default ChatWindow;
