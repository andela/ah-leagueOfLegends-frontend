import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import followingStatus from './actions';

class FollowUnfollow extends Component {
  componentDidMount() {
    const { followStatus } = this.props;
    followStatus(this.props.username);
  }

  render() {
    return (
      <button type="submit" className="btn-following" />

    );
  }
}

FollowUnfollow.propTypes = {};

const mapStateToProps = state => ({ followstate: state.followReducer });

const mapDispatchToProps = dispatch => bindActionCreators(
  { followStatus: followingStatus },
  dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(FollowUnfollow);
