import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navbar extends Component {
  componentDidMount() {}

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAuthenticated');
    window.location.reload(true);
  }

  render() {
    const { isAuthenticated } = this.props.state;
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="white z-depth-0">
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo black-text">Authors Haven</a>
                {(isAuthenticated) ? (
                  <ul className="right hide-on-med-and-down grey-text">
                    <li><i className="material-icons">search</i></li>
                    <li><i className="material-icons">notifications_none</i></li>
                    <li><i className="material-icons">bookmark_border</i></li>
                    <button type="button" className="waves-effect waves-light btn white teal-text" onClick={this.logout}>
                          logout
                    </button>
                  </ul>) : (
                    <ul className="right hide-on-med-and-down grey-text">
                      <li><i className="material-icons">search</i></li>
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
                        <button type="button" className="waves-effect waves-light btn white teal-text modal-trigger" href="#modal2">
                          Get started
                        </button>

                      </li>
                    </ul>)}

              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  state: PropTypes.instanceOf(Object).isRequired,
};

Navbar.defaultProps = { isAuthenticated: false };


const mapStateToProps = state => ({ state: state.Login });

export default connect(mapStateToProps)(Navbar);
