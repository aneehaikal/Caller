import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './globalStyles.less';

const {  Content } = Layout;
function App() {
  return (
   <Layout>
     <Header />
     <Layout>
        <Row style={{ width: '100%' }}>
          <Col md={16}>
            <Content
              style={{
                background: '#F3F8FD',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <Dashboard />
            </Content>
          </Col>
          <Col md={8}>
            <Sidebar  />
          </Col>
        </Row>
      </Layout>
   </Layout>
  );
}

export default App;
