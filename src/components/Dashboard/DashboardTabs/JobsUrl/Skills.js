import React from 'react';
import { Row, Col } from 'antd';
import '../../../../styles/dashboard.less';

const Skills = (props) => {
  return (
    <div className='skills-wrapper'>
      <Row>
        <Col span={24}>
          <p>Experience: {props.experience}</p>
        </Col>
        <Col span={24}>
          <h4>Skills Required</h4>
          <p>Must Have: {props.skills} </p>
          <p>Any (2) Must out of the below list:</p>
          <ul>
            <li>JPA/Hibernate</li>
            <li>Messaging queue/Kafka/SQS/distributed message/SNS/JMS</li>
            <li>NOSQL/Aerospike/Reddis/Cassendra</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
