import React from 'react';
import PropTypes from 'prop-types';

const ProfileHeader = ({ image, isAuthenticated }) => (
  <div>
    <header>
      <div className="navbar-fixed ">
        <nav className="white z-depth-0">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo col s12 black-text">Authors Haven</a>
              <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons black-text">menu</i>
              </a>
              <ul className="right hide-on-med-and-down grey-text">
                <li><i className="material-icons">search</i></li>
                <li><i className="material-icons">notifications_none</i></li>
                <li><i className="material-icons">bookmark_border</i></li>
                <li>
                  {(isAuthenticated) ? (
                    <img className="small-profile" src={image} alt="header-avatar" />
                  ) : (null)}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li><a href="">Home</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">Profile</a></li>
        <li><a href="">Home</a></li>
      </ul>
    </header>

  </div>
);

ProfileHeader.propTypes = {
  image: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,

};

export default ProfileHeader;
