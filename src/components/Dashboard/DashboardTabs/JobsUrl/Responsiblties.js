import React from 'react';
import { Row, Col } from 'antd';
import '../../../../styles/dashboard.less';

const Responsibilities = props => {
  return (
    <div className='Responsibilty-wrapper'>
      <Row>
        <Col span={24}>
          <h4>Roles and Responsibilities</h4>
          <span className="para">
            Tecnical design, Implementation, deployment and support.
            Partner with Business Analysts to review and implement business
            requirements. Perform development and Unit Testing.
             </span><br />
          <span className="para">
            Tecnical design, Implementation, deployment and support.
            Partner with Business Analysts to review and implement business
            requirements. Perform development and Unit Testing, Working closely.
             </span><br />
          <span className="para">
            Tecnical design, Implementation, deployment and support.
             </span><br />
          <span className="para">
            Tecnical design, Implementation, deployment and support.
             </span>
        </Col>
      </Row>
      <Row>
        <div className="responsibility">
          <p>This job is provided by Shine.com</p>
          <Col span={12}>
            <span>Seniority Level</span>
            <p className="job-level">Entry Level</p>
          </Col>
          <Col span={12}>
            <span>Employment Type</span>
            <p className="job-level">Full-Time</p>
          </Col>
          <Col span={12}>
            <span>Job Function</span>
            <p className="job-level">Engineering, Information Technology</p>
          </Col>
          <Col span={12}>
            <span>Industries</span>
            <p className="job-level">Information Technology and Services, Computer Software, Staffingand Recruiting</p>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Responsibilities;
