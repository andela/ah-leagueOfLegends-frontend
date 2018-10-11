import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ROUTE from '../../utils/routes';
import '../../styles/styles.css';


class ArticleHeader extends Component {
  componentDidMount() {

  }

  render() {
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
                <a href='/' className="waves-effect waves-light btn publish-new">Ready to publish?</a>
                <ul className="right hide-on-med-and-down grey-text">
                  <li><i className="material-icons">search</i></li>
                  <li><i className="material-icons">notifications_none</i></li>
                  <li><img className="small-profile" alt="User Profile" src="https://api.adorable.io/avatars/285/abott@adorable.png" /></li>
                </ul>
              </div>
            </div>
          </nav>
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
export default ArticleHeader;
