import React from 'react';

export function ChatbotLeft(props) {
  console.log(props, 'newMessages');
  const { chatList } = props;
  return (
    <div className="chatbot-custom">
      {Array.isArray(chatList) &&
        chatList.map((item, index) =>
          item.type == 'user' ? (
            <div className="helo-bot" key={index}>
              {' '}
              <span className="chat-img">
                <img src={item.img} />
              </span>
              {item.name}
              <div className="inner-bot">
                {' '}
                <span className="message">{item.text}</span>{' '}
              </div>{' '}
            </div>
          ) : (
            <div className="right-div" key={index}>
              <div className="right-item">
                <span className="message">{item.text}</span>{' '}
              </div>{' '}
              <span className="right-icon">
                {item.name} <img src={item.img} />
              </span>{' '}
            </div>
          ),
        )}
    </div>
  );
}
