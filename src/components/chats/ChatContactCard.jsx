import React from 'react';

const chatContactCard = () => {
  return (
    <li className="left__chat_item">
      <div className="chat__profile-avatar">
        <img loading="lazy" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/461e6d4490e2f1a9377f5df6bc530aa9.jpeg?x-expires=1661965200&amp;x-signature=wu4kVib%2B4dJkg7xEWj124jsKVUU%3D" />
      </div>
      <div className="chat__list-info">
        <div className="chat__companion_username">
          <b>T</b>
        </div>
        <div className="chat__message_preview">
          <div className='chat__message_preview-item1'>это из годов так 2000-х</div> <span className='chat__message_preview-item2'>8/29/2022</span>
        </div>
      </div>
    </li>
  );
};

export default chatContactCard;