import React from 'react';

import '../../../styles/styles.css';

const userInfo = (username, image, bio) => (

  <div style={{ width: '70%', marginLeft: '20%', marginTop: '2%' }}>
    <div className="">
      <div className="author-info">
        <img
          className="avatar-small"
          src={image}
          alt="User Profile Pic"
          style={{ marginTop: 10 }}
        />
        <div className="articale-time">
          <p>{username}</p>
          <div className="article-time--details" style={{ padding: 1 }}>
            {bio}
            <br />
            Draft
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default userInfo;
