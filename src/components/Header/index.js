import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Menu, Row, Col, Avatar, Dropdown } from 'antd';
import pause from '../../images/navbar/pause.png';
import stop from '../../images/navbar/stop.png';
import play from '../../images/navbar/play.png';
import User from '../../images/navbar/user.png';
import plus from '../../images/navbar/backgrounda1.png';
import file from '../../images/navbar/backgroundd1.png';
import oval from '../../images/navbar/oval.png';
import '../../styles/header.less';

const items = [
    { id: 1, name: 'Date', label: moment().format('L') },
    { id: 1, name: 'Time', label: moment().format('LT') },
    { id: 1, name: 'Dials', label: '35' },
    { id: 1, name: 'Connectes', label: '10' },
    { id: 1, name: 'ACD', label: '01:13' },
    { id: 1, name: 'Rank', label: '3/13' },
    { id: 1, name: 'Target', label: '120' },
    { id: 1, name: 'ACPH', label: '75/hour' },
  ];

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {play: false};
  }
  
  menu =()=> (
    <Menu className="customDropdown">
      <Menu.Item key="0">
        <a href="#">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">History</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Reports</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Logout</a>
      </Menu.Item>
    </Menu>
  );
  menuPlus =()=> (
    <Menu className="plusDropdown">
      <Menu.Item key="0">
        <a href="#">Company</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Contacts</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Jobs</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Notes</a>
      </Menu.Item>
    </Menu>
  );

   Timer = ()=>(
      <div className='timerWrapper'>
      <div className="timer">
        <span className="user-icon">
          <img src={User} className="user-img" />
        </span>
        <span className="span-group">
          <span className="text-timer">00:00</span>
          {this.state.play ? (
            <span
              className="icon-play"
            >
              <img src={play} />
            </span>
          ) : (
              <React.Fragment>
                <span className="icon-pause">
                  <img src={pause} />
                </span>
                <span className="icon-stop">
                  <img src={stop} />
                </span>
              </React.Fragment>
            )}
        </span>
      </div>
    </div>
    )

  render(){
    return(
      <div className='header-wrapper'>
        <Row>
          <Col md={2}>
            <div className="logo-img" />
          </Col>
          <Col md={14}>
          <div className="nav-content">
          <Menu mode="horizontal" className="menu-item-my">
              {items.map((item, index) => (
                  <Menu.Item key={index}>
                  {item.name}
                  <br />
                  <span>{item.label}</span>
                  </Menu.Item>
              ))}
          </Menu>
          </div>
          </Col>
          <Col md={8}>
            <Col xs={12}>
              {
                this.Timer()
              }
            </Col>
            <Col xs={12}>
              <div className="nav-icon">
                  <Menu mode="horizontal" className="Icons">
                  <Menu.Item key="img1">
                      <Avatar
                      className="imageOne"
                      src={file}
                      size="large"
                      style={{ backgroundColor: '#e6aa26' }}
                      />
                  </Menu.Item>
                  <Menu.Item key="img2" className="imageTwo">
                    <Dropdown overlay={this.menuPlus} trigger={['click']}>
                    <Avatar
                        className="imageOne"
                        src={plus}
                        size="large"
                        style={{ backgroundColor: '#1b66de' }}
                    />
                    </Dropdown>
                  </Menu.Item>
                  <Menu.Item key="img3" className="imageTwo">
                      <Dropdown
                      className="customDropdown"
                      overlay={this.menu}
                      trigger={['click']}
                      >
                      <a className="ant-dropdown-link" href="#">
                          <Avatar size="large" src={oval} />
                      </a>
                      </Dropdown>
                  </Menu.Item>
                  </Menu>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Header;
