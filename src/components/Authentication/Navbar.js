import React, { Component } from 'react';

class Navbar extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="white z-depth-0">
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo black-text">
                  Authors Haven
                </a>
                <a href="/" data-target="mobile-nav" className="sidenav-trigger" />
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
                    <button
                      className="waves-effect waves-light btn white teal-text
                                modal-trigger"
                      href="#modal2"
                    >
                      Get started
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
