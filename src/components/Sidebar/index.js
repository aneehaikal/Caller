import React from 'react';
import {
		Row,
		Col,
		Tabs,
    	Layout,
		Icon,
		Button,
		Input,
		Select,
		Form,
		Upload,	
		Modal,	
  } from 'antd';
import Phone from '../../images/Icons/phone.png';
import Sms from '../../images/Icons/sms.png';
import DarkEmail from '../../images/Icons/darkEmail.png';
import arrowLeft from '../../images/Icons/arrow-left.png';
import arrowRight from '../../images/Icons/arrow-right.png';
import EmailGrey from '../../images/sidebar/email-grey.png';
import ChatGrey from '../../images/sidebar/chat-grey.png';
import ShareGrey from '../../images/sidebar/share-grey.png';
import SmsGrey from '../../images/sidebar/sms-grey.png';
import dialerIcon from '../../images/Icons/dialer.png';
import PlusImage from '../../images/Icons/activ.png';
import Email from '../../images/Icons/email.png';
import NoResponse from '../../images/Icons/noresponse.png';
import Voicemail from '../../images/Icons/voicemail.png';
import Connected from '../../images/Icons/connected.png';
import Divide from '../../images/Icons/divide.png';
import Compose from '../../images/Icons/compose.png';
import Attach from '../../images/Icons/attachment.png';
import '../../styles/sidebar.less';
const { Sider } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;
const ButtonGroup = Button.Group;
const InputGroup = Input.Group;
const { Option } = Select;


const data = [
    {
      id: 1,
      name: 'Jhon Doe',
      time: '2:54 PM EDT (3.5 hrs behind)',
    },
    {
      id: 2,
      name: 'Smith',
      time: '1:14 PM EDT (5 hrs behind)',
    },
    {
      id: 3,
      name: 'Vanesa',
      time: '6:26 PM EDT (4.2 hrs behind)',
    },
  ];
  const phoneOne = [
    {
      value: '1',
      label: '1-987-7777',
    },
    {
      value: '2',
      label: '1-987-6753',
    },
    {
      value: '3',
      label: '1-987-8468',
    },
  ];    
  const info = [
    {
      value: '1',
      email: 'johndoe@gmail.com',
      subject: 'What is the subject',
    },
    {
      value: '2',
      email: 'smith@email.com',
      subject: 'What is the subject',
    },
    {
      value: '3',
      email: 'Vanesa@email.com',
      subject: 'What is the subject',
    },
  ];

  const template = [
	{
	  value: 'daily',
	  label: 'Add to call queue',
	},
	{
	  value: 'Weekly',
	  label: 'Call next week',
	},
	{
	  value: 'month',
	  label: 'Call next month',
	},
  ];

  const templateForm = [
    {
      value: 'daily',
      label: 'Daily Templete',
    },
    {
      value: 'Weekly',
      label: 'Weekly Templete',
    },
  ];
  const file = [
    {
      value: 'file',
      label: 'Select a file',
    },
    {
      value: 'file',
      label: 'Select image',
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const messageText = [
	{
	  value: 'text',
	  label: 'Template 1',
	},
	{
	  value: 'text',
	  label: 'Template 2',
	},
	{
	  value: 'text',
	  label: 'Template 3',
	},
  ];  
 class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            status:0,
            listDetail:[
                { name: '12', img: Phone, active: true },
                { name: ' 6', img: DarkEmail, active: false },
                { name: '4', img: Sms, active: false },
            ],
            sliderStatus:0,
			userStatus:0,			
			visibleOutcome:false,
			statusOutcomes:false,
        };
			}

		callback(key) {
			console.log(key);
		}
			
   handleOk = e => {
        console.log(e);
        this.setState({ visibleOutcomes: false });
      };
    
    sliderFunc = () => {
        console.log('fgdsgfdsg');
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({ visibleOutcomes: false });
      };
    
    onSelectedIndex = id => {
        const index = data.findIndex(i => i.id === id);
        this.setState({userStatus:index})
			};
		goNext = () => {
			let index = this.state.status;
			index++
			if (index > data.length - 1) {
				index = 0
			}
			this.setState({
				status:index
			})			
			this.onSelectedIndex(data[index].id)
	
		}
		setInitialStats() {
			this.setState({
				visibleOutcomes:true,
				statusOutcomes:0
			})
		  }
		goPrev = () => {
			let index = this.state.status;
			index--
			if (index < 0) {
				index = data.length - 1
			}
			this.setState({status:index})			
			this.onSelectedIndex(data[index].id)
	
		}
			
		Slider = props =>{
			return(
				<div className="slider-wrapper">
					<Row type="flex" justify="space-around" align="middle">
						<Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
							<span onClick={this.goPrev}>
								<img alt='' alt='' src={arrowLeft} />
							</span>
						</Col>
						<Col xs={20} sm={16} md={12} lg={16} xl={16} xxl={16}>
							<div className="slider-content" >
								<h4 className="slider-header">{data[this.state.status].name}</h4>
								<span className="slider-time">
									{data[this.state.status].time}
								</span>
							</div>
						</Col>
						<Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
							<span
								className="right-arrow"
								onClick={this.goNext}
							>
								<img alt='' alt='' src={arrowRight} />
							</span>
						</Col>
					</Row>
				</div>
			)
		}

		MainDailer = () =>{
			const selectedOption =
			Array.isArray(phoneOne) && phoneOne[this.state.status].label;
			return(
				<div className='mainDialer-wrapper'>
					<Row>
						<Col span={12}>						
							<InputGroup compact >
							<Select
								style={{ width: "100%" }}
								value={selectedOption}
								size="large"
								className='selector'
								>
								{phoneOne &&
									phoneOne.map((item, index) => (
									<Option key={index} value={item.value}>
										{item.label}
									</Option>
									))}
								</Select>
							</InputGroup>
						</Col>
						<Col span={6}>
							<span className="dialer-img">
								<img alt='' src={dialerIcon} />
							</span>
						</Col>
						<Col span={6}>
							<span className="phone-icon">
								<Icon type="phone" />
							</span>
						</Col>
					</Row>
				</div>
			)
		}

		Outcomes = ()=>{        
			return (
        <div className="outcomes-wrapper">
          <div className="outcomes">
            <Row>
              <Col span={14}>
                <p className="text">Outcome</p>
              </Col>
              <Col span={10}>
                <div className="btnOutcomes">
                  <Button
                    className="active-btn"
                    onClick={() =>
                      this.setState({ visibleOutcomes: true, statusOutcomes: 0 })
                    }
                  >
                    <img alt='' src={PlusImage} />
                  </Button>
                  <Button
                    className="multi-btn"
                    onClick={() => this.setState({ statusOutcomes: 1 })}
                  >
                    <img alt='' src={NoResponse} />
                  </Button>

                  <Button
                    className="multi-btn"
                    onClick={() => this.setState({ statusOutcomes: 1 })}
                  >
                    <img alt='' src={Voicemail} />
                  </Button>
                  <Button
                    className="connected-btn"
                    onClick={() => this.setState({ statusOutcomes: 2 })}
                  >
                    <img alt='' src={Connected} />
                  </Button>
                </div>
              </Col>
              <Modal
                title="Confirm Action"
                visible={this.state.visibleOutcomes}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    No
                  </Button>,
                  <Button key="submit" type="primary" onClick={this.handleOk}>
                    Yes
                  </Button>
                ]}
              >
                <p>Are you sure to flag this number as a bad number</p>
              </Modal>
            </Row>
          </div>
          <Row>
            <Col span={24}>
              {this.state.statusOutcomes == 1 && (
                <div className="visible">
                  <Row>
                    <Col span={8}>
                      <p className="newText">New Action</p>
                    </Col>
                    <Col span={16}>
                      <InputGroup compact>
                        <Select
                          style={{ width: "100%" }}
                          defaultValue="Add to call queue"
                          size="large"
                          className="selector"
                        >
                          {template &&
                            template.map((item, index) => (
                              <Option key={index} value={item.value}>
                                {item.label}
                              </Option>
                            ))}
                        </Select>
                      </InputGroup>
                    </Col>
                  </Row>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              {this.state.statusOutcomes === 2 && (
                <div className="visible">
                  <Row>
                    <Col span={8}>
                      <p className="newText">Note</p>
                    </Col>
                    <Col span={16}>
                      <TextArea size="large" rows={4} />
                      <Button className="btnStyle" type="primary" size="large">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Col>
          </Row>
          <div className="finalAction">
            <Row>
              <Col span={9}>
                <p className="text">Final Action</p>
              </Col>
              <Col span={15}>
                <ButtonGroup className="btnGroup">
                  <Button size="large" type="primary">
                    <img alt='' className="img" src={Email} />
                  </Button>
                  <Button size="large">
                    <img alt='' className="img" src={Sms} />
                  </Button>
                  <Button size="large">
                    <img alt='' className="img" src={Divide} />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </div>
        </div>
      );
		}

		SidebatForm = () =>{
			const selectedOption =
			Array.isArray(info) &&	info[this.state.status];
			return(
				<div className='siderbarForm-wrapper'>
				<Form className="form" {...formItemLayout}>
					<div className="visible">
					<Row>
					<div className="visible">
						<Col span={21}>						
						<InputGroup compact >
							<Select
							style={{ width: "100%" }}
							defaultValue="Daily Templete"
							size="large"
							className='selector'
							>
							{templateForm &&
								templateForm.map((item, index) => (
								<Option key={index} value={item.value}>
									{item.label}
								</Option>
								))}
							</Select>
						</InputGroup>
						</Col>
						<Col span={3}>
						<img alt='' className="imgComp" src={Compose} />
						</Col>
					</div>
					</Row>
					<Row>
						<Col span={24}>
						<div className="visible">
							<Input
							className="addon"
							size="large"
							addonBefore="To"
							value={selectedOption.email}
							/>
						</div>
						<div className="visible">
							<Input
							className="addon"
							size="large"
							addonBefore="Subject"
							value={selectedOption.subject}
							/>
						</div>
						<div className="visible">
							<TextArea size="large" rows={4} />
						</div>
						<div >
							<Row>
							<Col span={10}>
								<Upload name="logo" action="/upload.do" listType="picture">
								<Button className="attach">
									<img alt='' src={Attach} /> Attach
								</Button>
								</Upload>
							</Col>
							<Col span={14}>							
								<InputGroup compact >
									<Select
										style={{ width: "100%" }}
										defaultValue="Select a file"
										size="large"
										className='selector'
									>
									{file &&
										file.map((item, index) => (
										<Option key={index} value={item.value}>
											{item.label}
										</Option>
										))}
									</Select>
								</InputGroup>
							</Col>
							</Row>
						</div>
						<div>
							<Row gutter={16} type="flex" justify="space-between">
							<Col span={7}>
								<Button type="primary" className="btn"  size='large'>
								Send Now
								</Button>
							</Col>
							<Col span={7}>
								<Button className="btn btnStyle"   size='large'>
									Send Later
								</Button>
							</Col>
							<Col span={10}>
									<Button className="btn btnStyle"   size='large'>
										Send at Best time
									</Button>
							</Col>
							</Row>
						</div>
						</Col>
					</Row>
					</div>
				</Form>
				</div>
			)
		}

    render(){
        return(
		<div className='siderbar-wrapper'>
			<Sider width={null} className="Sidebar"
			>
				{
					this.Slider()
				}
				<div className='customTab-wrapper'>
					<Row>
						<Col sm={20} md={22} lg={24}>
							<Tabs
								className="tabLink sidebar-tabs"
								defaultActiveKey="1"
								onChange={this.callback}
							>
								<TabPane
									key="1"
									tab={
										<div className="tab-content">
											<img alt='' src={Phone} />
											<p className="first-p">Phone</p>
										</div>
									}
								>
									{
										this.MainDailer()
									}
									{
										this.Outcomes()
									}
									<Row>
										<Col span={24}>
										<div className='siderbarForm-wrapper'>
											{this.SidebatForm()}
											</div>
										</Col>
									</Row>
								</TabPane>
								<TabPane
									tab="Tab 2"
									key="2"
									tab={
										<div className="tab-content">
											<img alt='' src={EmailGrey} alt="newimage" />
											<p>Email</p>
										</div>
									}
								>
									{
										this.MainDailer()
									}
									<Row>
										<Col span={24}>
											{this.SidebatForm()}
											
										</Col>
									</Row>
								</TabPane>
								<TabPane
									tab="Tab 3"
									key="3"
									tab={
										<div className="tab-content">
											<img alt='' src={SmsGrey} />
											<p>SMS</p>
										</div>
									}
								>
									<React.Fragment>
										{this.MainDailer()}
										<Row>
											<Col span={12}>
											<InputGroup compact >
												<Select
													style={{ width: "100%" }}
													defaultValue="Template"
													size="large"
													className='selector'
													>
													{messageText &&
														messageText.map((item, index) => (
														<Option key={index} value={item.value}>
															{item.label}
														</Option>
														))}
													</Select>
												</InputGroup>
											</Col>
										</Row>
										<Row>
											<Col span={20}>
											<p className="sms-content">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Ducimus quas voluptatum sapiente architecto doloremque explicabo
											repellendus laudant
									     </p>
											</Col>
										</Row>
										</React.Fragment>
								</TabPane>
								<TabPane
									tab="Tab 4"
									key="4"
									tab={
										<div className="tab-content">
											<img alt='' src={ChatGrey} />
											<p>Chat</p>
										</div>
									}
								>
									{this.MainDailer()}
								</TabPane>
								<TabPane
									tab="Tab 5"
									key="5"
									tab={
										<div className="tab-content">
											<img alt='' src={ShareGrey} />
											<p>Share</p>
										</div>
									}
								>
									{this.MainDailer()}
								</TabPane>
							</Tabs>
						</Col>
					</Row>
				</div>
			</Sider>
		</div>
		)
	}
}

export default Sidebar;