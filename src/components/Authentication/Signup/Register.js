// Register.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from './actions/actions';
import Navbar from './Navbar';
import 'materialize-css/dist/css/materialize.css';
import { Button } from 'react-materialize';
import M from 'materialize-css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const el = document.querySelectorAll('.modal');
    M.Modal.init(el);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(user, this.props.history);
  }

  // Updates component with errors received if any
  // nextProps has errors if any
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <Navbar isSignup={true} /> */}

        <div className="container" style={{ marginTop: '50px', width: '700px' }}>
          {this.props.authReducer.message !== undefined ? (
            <span className="alert-reg-success">{this.props.authReducer.message}</span>
          ) : null}

          <div id="modal2" className="modal">
            <div className="modal-content">
              <p>
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
                          value={this.state.username}
                        />
                        {this.props.authReducer.error.username !== undefined ? (
                          <span className="alert-error">
                            {this.props.authReducer.error.username}
                          </span>
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
                          value={this.state.email}
                        />
                        {this.props.authReducer.error.email !== undefined ? (
                          <span className="alert-error">{this.props.authReducer.error.email}</span>
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
                          value={this.state.password}
                        />
                        {this.props.authReducer.error.password !== undefined ? (
                          <span className="alert-error">
                            {this.props.authReducer.error.password}
                          </span>
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
                      <a className="modal-trigger modal-close" href="#modal1">
                        Sign in
                      </a>
                    </div>
                  </form>
                </div>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Register.propTypes = { registerUser: PropTypes.func.isRequired };

const mapStateToProps = state => ({ authReducer: state.authReducer });

export default connect(
  mapStateToProps,
  { registerUser },
)(withRouter(Register));

{
}
