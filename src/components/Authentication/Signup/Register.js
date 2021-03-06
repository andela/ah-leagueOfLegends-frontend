// Register.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.css';
import { Button } from 'react-materialize';
import M from 'materialize-css';
import { registerUser } from './actions/actions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const el = document.querySelectorAll('.modal');
    await M.Modal.init(el);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { history, registerNewUser } = this.props;
    registerNewUser(
      {
        username,
        email,
        password,
      },
      history,
    );
  }

  render() {
    const { username, email, password } = this.state;
    const { authReducer } = this.props;
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: '50px', width: '700px' }}>
          <div id="modal2" className="modal custom-modal">
            <div className="modal-content">
              <h5>Join Authors Haven</h5>
              <h4 style={{ marginBottom: '20px' }}>Create an account</h4>
              <div className="row">
                <form onSubmit={this.handleSubmit} className="register">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        id="username"
                        onChange={this.handleInputChange}
                        value={username}
                      />
                      {(authReducer && authReducer.error.username) !== undefined ? (
                        <span className="alert-error">{authReducer.error.username}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={this.handleInputChange}
                        value={email}
                      />
                      {(authReducer && authReducer.error.email) !== undefined ? (
                        <span className="alert-error">{authReducer.error.email}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={this.handleInputChange}
                        value={password}
                      />
                      {(authReducer && authReducer.error.password) !== undefined ? (
                        <span className="alert-error">{authReducer.error.password}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="input-field col s12">
                    <Button type="submit" className="reg-button">
                      Register
                    </Button>
                    <br />
                    <br />
                    Already have an account?
                    {' '}
                    <a className="modal-trigger modal-close" href="#modal-social">
                      Sign in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  registerNewUser: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

Register.defaultProps = { history: undefined };

const mapStateToProps = state => ({ authReducer: state.authReducer });

export default connect(
  mapStateToProps,
  { registerNewUser: registerUser },
)(Register);
