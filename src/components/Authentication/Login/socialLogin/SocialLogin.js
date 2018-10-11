import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import login from './actions';

class SocialLogin extends Component {
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
      <div>
        <FacebookLogin
          appId="296338254283684"
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={this.responseFacebook}
        />
        <GoogleLogin
          clientId="645485731694-fabope70g976vi1kvm3ko2e9c2v92epc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ login: state.SocialLogin });

export default connect(mapStateToProps)(SocialLogin);
