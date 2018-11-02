import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getfollowers, getfollowing } from './actions';

class Followers extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    this.state = { username: '' };
  }

  componentDidMount() {
    const el = document.querySelectorAll('.modal');
    M.Modal.init(el);
  }

  static getDerivedStateFromProps(props, state) {
    const { username } = state;
    if (props.username && props.username !== username) {
      const { followers } = props;
      const { following } = props;
      followers(props.username);
      following(props.username);
      return { username: props.username };
    }
    return null;
  }


  render() {
    const { followstate } = this.props;
    return (
      <div className="followers">
        <li>
          <a className="p-r-30 modal-trigger" href="#followers-modal">
            {`${followstate.followers.length} followers`}
          </a>
        </li>
        <li>
          <a className="modal-trigger" href="#following-modal">
            {`${followstate.following.length} following`}
          </a>
        </li>

        <div className="users-list">

          <div className="modal z-depth-0 white " id="following-modal">
            {followstate.following.map(user => (
              <div key={user.id} className="follower-detail">
                <img
                  className="notification-avatar"
                  alt="profile-pic"
                  data-id={user.id}
                  src={user.image}
                />
                <Link
                  className="follow-username black-text"
                  to={`/profile/${user.username}`}
                  data-id={user.id}
                  onClick={window.location.reload}
                >
                  {`${user.username}`}
                </Link>


              </div>
            ))}
          </div>

          <div className="modal z-depth-0 white" id="followers-modal">
            {followstate.followers.map(user => (
              <div key={user.id} className="follower-detail">
                <img
                  className="notification-avatar"
                  alt="profile-pic"
                  data-id={user.id}
                  src={user.image}
                />
                <Link
                  className="follow-username black-text"
                  data-id={user.id}
                  to={`/profile/${user.username}`}
                  onClick={window.location.reload}
                >
                  {`${user.username}`}
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

Followers.propTypes = { followstate: PropTypes.instanceOf(Object).isRequired };

const mapStateToProps = state => ({ followstate: state.followReducer });

export default connect(
  mapStateToProps, { followers: getfollowers, following: getfollowing },
)(Followers);
