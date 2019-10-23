import React from 'react';
import { Row, Col,Button,Input,
  Select } from 'antd';
import '../../../../../styles/dashboard.less';

const InputGroup = Input.Group;
const { Option } = Select;

export function ChatBtns() {
  const messageText = [
    {
      value: 'text',
      label: 'Others',
    },
    {
      value: 'text',
      label: 'Thanks',
    },
    {
      value: 'text',
      label: 'Wellcome',
    },
  ];
  return (
    <div className='chatBtns'>
      <Row gutter={16}>
        <Col sm={8} md={4} lg={4} xl={4} xxl={4}>         
          <Button className="btnprmy" type="primary"  size='large'>
            Interested
          </Button>
        </Col>
        <Col sm={8} md={5} lg={5} xl={5} xxl={4}>         
          <Button className="btn" size='large'>
            Not interested
          </Button>
        </Col>
        <Col sm={8} md={7} lg={7} xl={7} xxl={6}>          
          <Button className="btn"  size='large'>
            Working with an agency
          </Button>
        </Col>
        <Col sm={8} md={8} lg={8} xl={7} xxl={6}>         
          <Button className="btn"  size='large'>
            Not accepting new vendors
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <div className="top">
          <Col sm={8} md={8} lg={7} xl={7} xxl={6}>           
            <Button className="btn"  size='large'>
              Manage the vendors list
            </Button>
          </Col>
          <Col sm={8} md={8} lg={7} xl={7} xxl={6}>           
            <Button className="btn"  size='large'>
              Send me some information
            </Button>
          </Col>
          <Col sm={8} md={8} lg={7} xl={6} xxl={6}>            
            <Button className="btn"  size='large'>
               Position isn't open
            </Button>
          </Col>
          <Col sm={8} md={8} lg={7} xl={4} xxl={6}>
            <InputGroup compact >
              <Select
                style={{ width: "100%" }}
                defaultValue="Others"
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
        </div>
      </Row>
    </div>
  );
}
