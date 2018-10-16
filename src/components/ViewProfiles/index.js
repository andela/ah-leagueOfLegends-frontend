import React from 'react';
import PropTypes from 'prop-types';

const ViewProfile = ({
  username, image, bio, onEditClick, avatarUpload,
}) => (
  <main className="conatiner">
    <div className="row">
      <div className="col m5 s12 offset-m3 profile">
        <div className="user-info">
          <div className="user-detail">
            <h4 className="username">{username}</h4>
            <button
              data-target="modal1"
              type="submit"
              className="waves-effect waves-light btn  btn-flat white grey-text"
              onClick={onEditClick}
            >
              Edit profile
            </button>
          </div>
          <p className="bio offset-s2">{bio}</p>
          <ul className="followers-link">
            <li>
              <a className="grey-text p-r-30" href="#">
                0 Following
              </a>
            </li>
            <li>
              <a className="grey-text" href="#">
                0 Followers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col m1  avatar-wrapper">
        <img className="avatar" src={image} alt="header-profile" />
        <button onClick={avatarUpload} type="submit">
          <i className="material-icons">add_a_photo</i>
        </button>
      </div>
    </div>
  </main>
);

ViewProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  avatarUpload: PropTypes.func.isRequired,
};

export default ViewProfile;
