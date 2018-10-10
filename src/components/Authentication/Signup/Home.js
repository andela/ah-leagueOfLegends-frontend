// Home.js

import React, { Component } from 'react';
import Register from './Register';

export default class Home extends Component {
  render() {
    return (
      <div>
        <title>Authors Haven</title>
        <div className="navbar-fixed ">
          <nav className="white z-depth-0">
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo black-text">
                  Authors Haven
                </a>
                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                  <i className="material-icons black-text">menu</i>
                </a>
                <ul className="right hide-on-med-and-down grey-text">
                  <li>
                    <i className="material-icons">search</i>
                  </li>
                  <li>
                    <a
                      className="waves-effect waves-light btn white teal-text
                    modal-trigger"
                      href="#modal1"
                    >
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      className="waves-effect waves-light btn white teal-text
                    modal-trigger"
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
        <Register />
      </div>
    );
  }
}
