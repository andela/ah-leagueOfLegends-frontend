import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import followUser from './actions';

class FollowUnfollow extends Component {
  state={ following: false }

  componentWillReceiveProps(nextProps) {
    if (nextProps.following !== this.state.following) {
      this.setState({ following: nextProps.following });
      console.log('STATE', this.state);
    }
  }

  handlefollow = () => {
    const { followUnfollow } = this.props;
    followUnfollow(this.props.username);
  }

  render() {
    return (
      <button
        type="submit"
        className="btn-following"
        onClick={this.handlefollow}
      >
        {this.state.following ? 'following' : 'follow'}
      </button>
    );
  }
}

FollowUnfollow.propTypes = { followUnfollow: PropTypes.func.isRequired };

const mapStateToProps = state => ({ followstate: state.followReducer });

export default connect(
  mapStateToProps, { followUnfollow: followUser },
)(FollowUnfollow);
