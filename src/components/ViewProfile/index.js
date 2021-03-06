import React from 'react';
import PropTypes from 'prop-types';
import FollowUnfollow from '../../containers/FollowUnfollow';
import Followers from '../../containers/FollowUnfollow/followers';

const ViewProfile = ({
  username, image, bio, onEditClick, avatarUpload, loggedinUsername, isAuthenticated, following,
}) => (
  <main className="conatiner">
    <div className="row">
      <div className="col m5 s12 offset-m3 profile">
        <div className="user-info">
          <div className="user-detail">
            <h4 className="username">
              {username}
            </h4>
            {(isAuthenticated && loggedinUsername === username) ? (
              <button
                id="edit"
                data-target="modal1"
                type="submit"
                className="waves-effect waves-light btn  btn-flat white grey-text"
                onClick={onEditClick}
              >
              Edit profile
              </button>
            ) : <FollowUnfollow following={following} username={username} />}
          </div>
          <p className="bio offset-s2">{bio}</p>
          <ul className="followers-link">
            <Followers username={username} />
          </ul>
        </div>
      </div>
      <div className="col m1  avatar-wrapper">
        <img className="avatar" src={image} alt="header-profile" />
        {(isAuthenticated && loggedinUsername === username) ? (
          <button onClick={avatarUpload} type="submit">
            <i className="material-icons">add_a_photo</i>
          </button>) : (null)}
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
  loggedinUsername: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  following: PropTypes.bool.isRequired,

};

export default ViewProfile;
