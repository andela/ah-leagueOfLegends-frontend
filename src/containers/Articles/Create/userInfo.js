import React from 'react';

import '../../../styles/styles.css';

const userInfo = () => (
  <div style={{ width: '70%', marginLeft: '20%', marginTop: '2%' }}>
    <div className="">
      <div className="author-info">
        <img
          className="avatar-small"
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="User Profile Pic"
          style={{ marginTop: 10 }}
        />
        <div className="articale-time">
          <p>Gilbert Ngeywo </p>
          <div className="article-time--details" style={{ padding: 1 }}>
            I Love Programming so much. Wanna be a world class Programmer
            <br />
            Draft
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default userInfo;
