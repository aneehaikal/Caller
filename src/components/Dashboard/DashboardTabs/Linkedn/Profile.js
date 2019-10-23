import React from 'react';
import {Button} from 'antd'
import '../../../../styles/dashboard.less';

export const Profile = () => (
  <div className='LinkednProfile'>
    <div className="about-profile">
      <h4 className="p-name">Jason Keath</h4>
      <p className="p-heading">
        Keynote speaker on Creativity And digital Innovation, Writer,
        Enterprenur
      </p>
      <p className="p-about">
        Social fresh Confrence. University of North Carolina at Chartiotte
      </p>
      <p className="p-new">New York, New york 500 </p>
      <div className="buttons">
        <Button type="primary" className='btn'  size='large'>
          Connect
        </Button>       
        <div className="custom-btn">
            <Button size='large'>
            More  ...
            </Button>    
        </div>
      </div>
    </div>
  </div>
);
