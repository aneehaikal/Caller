import React from 'react';
import { Avatar, Row, Col } from 'antd';
// import { DefaultButton } from '../../Button';
import { Profile } from './Profile';
import { Information } from './information';
import { Media } from './Media';
import '../../../../styles/dashboard.less';

const Linkedn = () => (
  <div className="linkedn-wrapper">
    <Row guitter={22}>
      <Col sm={12} md={12} lg={12} xl={12} xxl={15}>
        <div className="outerBox">
          <div className="header-images" />
          <div className="image">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <div className="innerbox">
            <Profile />
            <Information />
            <Media />
          </div>
          <div />
        </div>
      </Col>
    </Row>
  </div>
);

export default Linkedn;
