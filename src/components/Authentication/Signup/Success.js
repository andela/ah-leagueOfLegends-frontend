import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Success extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="m12 s12 col">
            <div className="card-panel">
              <div className="row">
                <div className="success-content ">
                  <div>
                    <i className="material-icons medium">done</i>
                  </div>
                  <h5>Welcome to Authors Haven!</h5>
                  <span className="alert-reg-success">
                    Please verify your email address to activate your account. If you do not see it,
                    check your spam folder.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Success.propTypes = { authReducer: PropTypes.instanceOf(Object).isRequired };

const mapStateToProps = state => ({ authReducer: state.authReducer });

export default connect(mapStateToProps)(Success);
