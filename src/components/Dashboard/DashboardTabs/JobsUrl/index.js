import React from 'react';
import Skills from './Skills';
import Responsibilities from './Responsiblties';
import Profile from './profile';
import '../../../../styles/dashboard.less';

const JobsUrl = () => {
  return (
    <div className='jobUrl-wrapper'>
      <Profile />
      <Skills experience="6-10 Years" skills='Java, Spring/spring boot' />
      <Responsibilities />
    </div>
  );
}
export default JobsUrl;