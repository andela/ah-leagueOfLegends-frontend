import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import ROUTE from '../../utils/routes';
import '../../styles/styles.css';


class ArticleHeader extends Component {
  state = {
    profileClicked: false,
    publishClicked: false,
  };

  componentDidMount() {
    const { getTags, removeTag, tags } = this.props;
    const chip = document.querySelectorAll('.chips');
    M.Chips.init(chip, {
      placeholder: 'Enter your tags ...',
      onChipAdd: getTags,
      onChipDelete: removeTag,
      data: tags.map(tag => ({ tag })),
    });
  }

  profileDropDownhandler = () => (
    this.setState(prevState => ({ profileClicked: !prevState.profileClicked }))
  );

  publishClickedHandler = () => (
    this.setState(prevState => ({ publishClicked: !prevState.publishClicked }))
  );

  render() {
    const { publishHandler } = this.props;
    const { profileClicked, publishClicked } = this.state;
    return (
      <div>
        <div className="navbar-fixed ">
          <nav className="white z-depth-0">
            <div className="container">
              <div className="nav-wrapper">
                <NavLink to={ROUTE.home} className="brand-logo col s12 black-text">Authors Haven</NavLink>
                <a href="/" data-target="mobile-nav" className="sidenav-trigger">
                  <i className="material-icons black-text">menu</i>
                </a>
                <button type="button" onClick={this.publishClickedHandler} className="button">
                    Ready to Publish?
                </button>
                <ul className="right hide-on-med-and-down grey-text">
                  <li><i className="material-icons">search</i></li>
                  <li><i className="material-icons">notifications_none</i></li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <div onClick={this.profileDropDownhandler} role="link">
                      <img className="small-profile" alt="User Profile" src="https://api.adorable.io/avatars/285/abott@adorable.png" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="card hoverable dropdown" style={{ display: (profileClicked ? 'block' : 'none') }}>
          <ul>
            <li><a href="/" className="card-content">Home</a></li>
            <li><a href="/" className="card-content">Sign out</a></li>
          </ul>
        </div>
        <div className="publish-article-dropdown" style={{ display: (publishClicked ? 'block' : 'none') }}>
          <h6><b>Prepare your story for readers</b></h6>
          Add or change tags (up to 5) so readers know what your story is about.
          <br />
          <div className="chips chips-placeholder" />
          <br />
          <br />
          <button type="button" className="publish-button" onClick={publishHandler}>
            Publish Now
          </button>
        </div>
        <ul className="sidenav" id="mobile-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">Search</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    );
  }
}

ArticleHeader.propTypes = {
  publishHandler: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  tags: PropTypes.instanceOf(Object).isRequired,
};

export default ArticleHeader;
