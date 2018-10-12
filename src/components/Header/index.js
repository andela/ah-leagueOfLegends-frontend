import React from 'react';
import { NavLink } from 'react-router-dom';

import ROUTE from '../../utils/routes';

const ArticleHeader = () => (
  <div>
    <div>
      <title>Authors Haven</title>
      <div className="navbar-fixed ">
        <nav className="white z-depth-0">
          <div className="container">
            <div className="nav-wrapper">
              <NavLink to={ROUTE.home} className="brand-logo black-text">
                Authors Haven
              </NavLink>
              <a href="/" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons black-text">menu</i>
              </a>
              <ul className="right hide-on-med-and-down grey-text">
                <li>
                  <i className="material-icons">search</i>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn white teal-text modal-trigger"
                    href="/"
                  >
                    Sign in
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn white teal-text modal-trigger"
                    href="#modal2"
                  >
                    Get started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Search</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  </div>
);
export default ArticleHeader;
