// Home.js

import React, { Component } from 'react';

export default class Success extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="row">
        <div className="m12 s12 col">
          <div className="card-panel deep-orange darken-1">
            <div className="row">
              <div className="col l8 white-text">
                <h5>Account Created</h5>
                <h6>Go to your email to activate your account.</h6>
              </div>
              <div className="col l4 right-align">
                <br />
                <a
                  href="#modalSubscribe"
                  className="waves-effect waves-light modal-trigger btn btn-large white orange-text btn-flat"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
