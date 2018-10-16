import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import login from './actions';

class SocialLogin extends Component {
  componentDidMount() {
    const el = document.querySelectorAll('.modal');
    M.Modal.init(el);
  }

  responseFacebook = (response) => {
    const { dispatch } = this.props;
    dispatch(login('facebook', response.accessToken));
  }

  responseGoogle = (response) => {
    const { dispatch } = this.props;
    dispatch(login('google-oauth2', response.accessToken));
  }

  render() {
    const customHeader = {};
    customHeader['Content-Type'] = 'application/json';
    return (
      <div className="modal social-modal custom-modal" id="modal-social">
        <div className="modal-content">
          <div className="welcome-modal-msg">
            <h4>Welcome back.</h4>
            <p>
            Sign in to access your personalized homepage, follow authors and
            topics you love, and like stories that matter to you.
            </p>
          </div>
          <div className="modal-btn">
            <GoogleLogin
              clientId="645485731694-fabope70g976vi1kvm3ko2e9c2v92epc.apps.googleusercontent.com"
              className="white waves-effect waves-light btn-social-google"
              onSuccess={this.responseGoogle}
              Icon
              onFailure={this.responseGoogle}
            >
              <i className="fa fa-google" />
              <span />
              {' '}
              <span />
              Signin with Google
            </GoogleLogin>
          </div>
          <div className="modal-btn">
            <FacebookLogin
              appId="296338254283684"
              autoLoad={false}
              fields="name,email,picture"
              icon="fa-facebook"
              showIcon
              cssClass="white waves-effect waves-teal btn-social-facebook"
              textButton=" Signin with facebook"
              callback={this.responseFacebook}
            />
          </div>
          <div href="#modal1" className="white waves-effect waves-light  btn-login-email modal-trigger modal-close">
          Signin with email
          </div>
          <p>
            No account?
            <a href="#modal2" className="modal-trigger modal-close"> Create One</a>
          </p>
          <a href="#modal" className="modal-trigger modal-close"> Forgot Password ?</a>
        </div>
      </div>
    );
  }
}
SocialLogin.propTypes = { dispatch: PropTypes.func.isRequired };
const mapStateToProps = state => ({ login: state.SocialLogin });

export default connect(mapStateToProps)(SocialLogin);
