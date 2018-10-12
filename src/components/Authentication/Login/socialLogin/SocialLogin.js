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
      <div className="modal social-modal" id="modal-social">
        <div className="modal-content">
          <div className="modal-btn">
            <FacebookLogin
              appId="296338254283684"
              autoLoad={false}
              fields="name,email,picture"
              icon="fa-facebook"
              cssClass="white waves-effect btn-social-facebook"
              textButton=" Signin with facebook"
              callback={this.responseFacebook}
            />
          </div>
          <div className="modal-btn">
            <GoogleLogin
              clientId="645485731694-fabope70g976vi1kvm3ko2e9c2v92epc.apps.googleusercontent.com"
              buttonText=" Signin with Google"
              className="btn-social-google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </div>
          <div className="btn  white btn-text-social">
                     Signin with email
          </div>
        </div>
      </div>
    );
  }
}
SocialLogin.propTypes = { dispatch: PropTypes.func.isRequired };
const mapStateToProps = state => ({ login: state.SocialLogin });

export default connect(mapStateToProps)(SocialLogin);
