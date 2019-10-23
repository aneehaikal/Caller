import React from 'react';
import { Card, Icon, Button } from 'antd';
import Bitmap from '../../../../images/Icons/bitmap.png'
import '../../../../styles/dashboard.less';

const Profile = () => {
  const { Meta } = Card;
  return (
    <div className="JobUrlProfile">
      <Card className="card" cover={<img alt='' src={Bitmap} />} size="small">
        <Meta
          title="Java Developer"
          description={
            <div className="cardContent">
              <p className="address">
                Amiga informatic <span>. Gurgaon, IN</span>
              </p>
              <p>
                1 week ago.
                <span>
                  <Icon type="clock-circle" /> Be among the first applicants
                </span>
              </p>
              <Button className="btnStyle" type="primary" size="large">
                Apply on company website
                <Icon type="export" />
              </Button>             
            </div>
          }
        />
      </Card>
    </div>
  );
}
export default Profile;