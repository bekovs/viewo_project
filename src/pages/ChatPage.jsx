import React from 'react';
import "../styles/chatPage.css";

const ChatPage = () => {
  return (
    <div className='chatPage'>
      <div className="container">
        <div className="left__chat-block">
          <div className="left__chat_header">
            <div className='left__chat_back-arrow'>
              <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L10.8284 22H39C39.5523 22 40 22.4477 40 23V25C40 25.5523 39.5523 26 39 26H10.8284L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"></path></svg>
            </div>
            <h3>
              Messages
            </h3>
          </div>
          <ul className="left__chat_list">
            <li className="left__chat_item">
              fokfpo
            </li>
            <li className="left__chat_item">
              bf,pokkop
            </li>
            <li className="left__chat_item">
              gmopkgope
            </li>
            <li className="left__chat_item">
              kfodpogk
            </li>
          </ul>
        </div>
        <div className="right__chat-block">

        </div>
      </div>
    </div>
  );
};

export default ChatPage;