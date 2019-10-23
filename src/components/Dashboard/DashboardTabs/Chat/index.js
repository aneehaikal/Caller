import React from 'react';
import { Row, Col } from 'antd';
import { ChatbotLeft } from './left';
import Profile from '../../../../images/Dashboard/teamtwilliokim.png';
import Agent from '../../../../images/Profile/oval.png';
import { ChatBtns } from './Btns/chatBtns.js';
import '../../../../styles/dashboard.less';

export function Chat() {
  const newMessages = [
    {
      id: 1,
      type: 'user',
      name: 'John doe',
      text: 'Hello John Doe here.',
      img: Profile,
    },
    {
      id: 2,
      type: 'agent',
      name: 'Agent',
      text:
        'I’m calling about your position posted on li, are you the person that handles the hiring? (don’t assume they are).',
      img: Agent,
    },

    {
      id: 1,
      type: 'user',
      name: 'John doe',
      text: 'Yes I am.',
      img: Profile,
    },
  ];
  return (
    <React.Fragment>
      <div className='chat-wrapper'>
        <Row>
          <Col span={24}>
            <ChatbotLeft chatList={newMessages} />
          </Col>
        </Row>
      </div>
      <ChatBtns />
    </React.Fragment>
  );
}
