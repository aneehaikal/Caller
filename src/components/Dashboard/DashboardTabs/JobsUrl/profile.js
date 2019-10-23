import React from 'react';
import { Card, Icon } from 'antd';
// import { IconButton } from '../../Button/iconButton';
import Bitmap from '../../../../images/Icons/bitmap.png'
import '../../../../styles/dashboard.less';

const Profile = () => {
  const { Meta } = Card;
  return (
    <div className='JobUrlProfile'>
      <Card className="card" cover={<img src={Bitmap} />} size="small" >
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
                  <Icon type="clock-circle" /> Be among the first
                  applicants
                  </span>
              </p>
              {/* <IconButton
                name="Apply on company website"
                type="primary"
                size="large"
                icon={<Icon type="export" />}
              /> */}
            </div>
          }
        />
      </Card>
    </div>
  );
}
export default Profile;