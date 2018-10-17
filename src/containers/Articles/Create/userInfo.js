import React, { Component } from 'react';
import '../../../styles/styles.css';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import fetchUserDetailsAction from '../../Profile/ViewProfile/actions';

class UsrInfo extends Component {
  componentDidMount() {
    const { fetchUserDetails, username } = this.props;
    fetchUserDetails(username);
  }

  render() {
    const { viewProfileReducer, username } = this.props;
    const { payload } = viewProfileReducer;

    return (
      <div style={{ width: '70%', marginLeft: '20%', marginTop: '2%' }}>
        <div className="">
          <div className="author-info">
            <img
              className="avatar-small"
              src={payload.profile.image}
              alt="User Profile Pic"
              style={{ marginTop: 10 }}
            />
            <div className="articale-time">
              <p>
                {username}
                {' '}
              </p>
              <div className="article-time--details" style={{ padding: 1 }}>
                {payload.profile.bio}
                <br />
                Draft
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UsrInfo.propTypes = {
  viewProfileReducer: PropTypes.instanceOf(Object).isRequired,
  username: PropTypes.instanceOf(Object).isRequired,
  fetchUserDetails: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({ viewProfileReducer: state.viewProfileReducer });

const mapDispatchToProps = dispatch => bindActionCreators(
  { fetchUserDetails: fetchUserDetailsAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsrInfo);
