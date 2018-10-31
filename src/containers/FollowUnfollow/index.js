import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import followUser from './actions';

class FollowUnfollow extends Component {
  handlefollow = () => {
    const { followUnfollow } = this.props;
    followUnfollow(this.props.username);
  }

  render() {
    // console.log(this.props, '*****');
    return (
      <button
        type="submit"
        className="btn-following"
        onClick={this.handlefollow}
      >
        {this.props.following ? 'following' : 'follow'}
      </button>
    );
  }
}

FollowUnfollow.propTypes = { followUnfollow: PropTypes.func.isRequired };

const mapStateToProps = state => ({ followstate: state.followReducer });

export default connect(
  mapStateToProps, { followUnfollow: followUser },
)(FollowUnfollow);
