import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import followUser from './actions';

class FollowUnfollow extends Component {
  handlefollow = () => {
    const { followUnfollow, username } = this.props;
    followUnfollow(username);
  }

  render() {
    const { following } = this.props;
    return (
      <button
        type="submit"
        className="btn-following"
        onClick={this.handlefollow}
      >
        {following ? 'following' : 'follow'}
      </button>
    );
  }
}

FollowUnfollow.propTypes = {
  followUnfollow: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ followstate: state.followReducer });

export default connect(
  mapStateToProps, { followUnfollow: followUser },
)(FollowUnfollow);
