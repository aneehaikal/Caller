import React from 'react';
import { Avatar, Row, Col, Menu, Dropdown, Card,Descriptions,Tabs } from 'antd';
import {
    Chat,
    History,
    Jobs,
    Contacts,
    Linkedn,
    JobsUrl,
  } from './DashboardTabs';
import LinkedIn from '../../images/Profile/linkedin.png';
import Twitter from '../../images/Profile/twitter.png';
import Facebook from '../../images/Profile/fb.png';
import Instagram from '../../images/Profile/instagram.png';
import File from '../../images/Profile/file.png';
import Phone from '../../images/Profile/phoneGrey.png';
import EmailGrey from '../../images/Profile/emailGrey.png';
import downArrow from '../../images/Profile/downArrow.png';
import Dialer from '../../images/Profile/dialer.png';
import timeRecorder from '../../images/Profile/timeRecorder.png';
import Bitmap from '../../images/Profile/bitmap.png';
import IndexIcon from '../../images/Icons/icon-index.png';
import Combinedshape from '../../images/Icons/menu-white.png';
import JobIcon from '../../images/Icons/job-icon.png';
import ContactIcon from '../../images/Icons/contact-icon.png';
import NumberingIcon from '../../images/Icons/numbering-icon.png';
import ClenderIcon from '../../images/Icons/clender-icon.png';
import AttachmentIcon from '../../images/Icons/attachment-icon.png';
import linkedinIcon from '../../images/Icons/linkedin.png';
import '../../styles/dashboard.less';
const { TabPane } = Tabs;

const menu = (
  <Menu>
    <Menu.Item key="0">+92745897694</Menu.Item>
    <Menu.Item key="1">+92745897694</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2 "> +92745897694</Menu.Item>
  </Menu>
);  
const email = (
  <Menu>
    <Menu.Item key="0">jhondoe@gmail.com</Menu.Item>
    <Menu.Item key="1">jhondoe11@gmail.com</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2 ">jhondoe123@gmail.com</Menu.Item>
  </Menu>
);

class Dashboard extends React.Component{
  render(){
    const companyDetails = [
      {
        title: 'John Doe',
        about: 'General Manager',
        info: 'San Francisco, Callfornia',
        link: LinkedIn,
        link2: Twitter,
        link3: Facebook,
        link4: Instagram,
        link5: File,
      },
      {
        title: 'Last Call By',
        about: 'Army jones',
        info: '9/12/2019 | 03:20 pm',
        link: Phone,
        name1: '300',
        link2: Dialer,
        name2: '200',
        link3: timeRecorder,
        name3: '22:14:12',
      },
      {
        title: (
          <span>
            <img alt='' className="titleImg" src={Bitmap} />
            Citi Bank
          </span>
        ),
        info: (
          <span>
            <img alt='' className="titleImg" src={Phone} />
            <span className="phone-dropdown">+9990721345</span>
            <Dropdown overlay={menu} trigger={['click']}>
              <img alt='' src={downArrow} />
            </Dropdown>
          </span>
        ),

        name1: (
          <span>
            <img alt='' className="titleImg" src={EmailGrey} />
            <span className="phone-dropdown">jhondoe@gmail.com</span>
            <Dropdown overlay={email} trigger={['click']}>
              <img alt='' src={downArrow} />
            </Dropdown>
          </span>
        ),
      },
    ];
    return(
      <div className="dashboard-wrapper">
        <div className="profile-wrapper">
          <Card bordered={false} className="profile-card">
            <Row gutter={24} type="flex" align="middle" justify="center">
              <Col xs={6} sm={6} md={6} lg={4} xl={2} xxl={2}>
                <Avatar
                    className="avatar"
                    size="large"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={20} xl={22} xxl={22}>                       
                <Descriptions
                  className="companyDetail"
                  title=""
                  layout="vertical"
                  column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 1, xs: 1 }}
                >
                  {companyDetails &&
                    companyDetails.map((item, index) => (
                    <Descriptions.Item key={index} label={item.title}>
                      {item.about} <br />
                      {item.info} <br />
                      <div className="links">
                        <span className="link-desc">
                            <img alt='' src={item.link} /> <span>{item.name1}</span>
                        </span>
                        <span className="link-desc">
                            <img alt='' src={item.link2} /> <span>{item.name2}</span>
                        </span>
                        <span className="link-desc">
                            <img alt='' src={item.link3} /> <span>{item.name3}</span>
                        </span>
                        <img alt='' className="imgs" src={item.link4} />
                        <img alt='' className="imgs" src={item.link5} />
                      </div>
                    </Descriptions.Item>
                    ))
                  }
                </Descriptions>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="mainTab-wrapper">
          <Row>
            <Col sm={20} md={22} lg={24} xl={24} xxl={24}>
              <Tabs
                className="tabLink main-tabs"
                defaultActiveKey="1"
                // onChange={this.callback}
              >
                <TabPane
                key="1"
                tab={
                    <div className="tab-content">
                    <img alt='' src={Combinedshape} />
                    </div>
                }
                >
                  <Chat />
                </TabPane>
                <TabPane
                tab="Tab 2"
                key="2"
                tab={
                    <div className="tab-content">
                    <img alt='' src={IndexIcon} />
                    </div>
                }
                >
                  <History />
                </TabPane>
                <TabPane
                tab="Tab 3"
                key="3"
                tab={
                    <div className="tab-content">
                    <img alt='' src={JobIcon} />
                    </div>
                }
                >
                  <Jobs />
                </TabPane>
                <TabPane
                tab="Tab 4"
                key="4"
                tab={
                    <div className="tab-content">
                    <img alt='' src={ContactIcon} />
                    </div>
                }
                >
                  <Contacts />
                </TabPane>
                <TabPane
                tab="Tab 5"
                key="5"
                tab={
                    <div className="tab-content">
                    <img alt='' src={NumberingIcon} />
                    </div>
                }
                >
                  <History />
                </TabPane>
                <TabPane
                tab="Tab 6"
                key="6"
                tab={
                    <div className="tab-content">
                    <img alt='' src={ClenderIcon} />
                    </div>
                }
                >
                  <History />
                </TabPane>
                <TabPane
                tab="Tab 7"
                key="7"
                tab={
                    <div className="tab-content">
                    <img alt='' src={AttachmentIcon} />
                    </div>
                }
                >
                  <JobsUrl />
                </TabPane>
                <TabPane
                tab="Tab 8"
                key="8"
                tab={
                    <div className="tab-content">
                      <img alt='' src={linkedinIcon} />
                    </div>
                }
                >
                  <Linkedn />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>      
      </div>
    )
  }
}

export default Dashboard;