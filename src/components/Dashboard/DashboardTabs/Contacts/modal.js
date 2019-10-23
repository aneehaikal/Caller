import React from 'react';
import { Modal, Button, Row, Col, Form, Input } from 'antd';

function DefaultModal(props) {

  return (
    <div>
      <Modal
        title="Add Contact"
        visible={props.visible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={props.handleOk}>
            Save
            </Button>,
          <Button key="back" onClick={props.handleCancel}>
            Cancel
            </Button>,
        ]}
      >
        <Form layout="horizontal">
          <Row gutter={8}>
            <Col md={12} lg={12}>
              <Form.Item label="First Name">
                <Input />
              </Form.Item>
            </Col>
            <Col md={12} lg={12}>
              <Form.Item label="Last Name">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col md={12} lg={12}>
              <Form.Item label="Title">
                <Input />
              </Form.Item>
            </Col>
            <Col md={12} lg={12}>
              <Form.Item label="Phone">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

DefaultModal.propTypes = {};

export default DefaultModal;
