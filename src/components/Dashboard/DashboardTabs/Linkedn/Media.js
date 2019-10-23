import React from 'react';
import slider1 from '../../../../images/Dashboard/slider1.jpg';
import slider2 from '../../../../images/Dashboard/slider2.jpg';
import '../../../../styles/dashboard.less';

export const Media = () => (
  <div className="media-wrapper">
    <div className="media">
      <div className="heading">
        <h4>Media(5)</h4>
      </div>
      <div className="newItem">
        <span>Previous, Next</span>
      </div>
      {/* <div className="images">
        <div className="slider1">
          <img className="img-responsive" src={slider2} />
        </div>
        <div className="slider2">
          <img src={slider2} />
        </div>
      </div> */}
    </div>
  </div>
);
