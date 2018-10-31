import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { getfollowers, getfollowing } from './actions';
import FollowUnfollow from '.';

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
    return (
      <div className="followers">
        <li>
          <a className="p-r-30 modal-trigger" href="#followers-modal">
            {`${this.props.followstate.followers.length} followers`}
          </a>
        </li>
        <li>
          <a className="modal-trigger" href="#following-modal">
            {`${this.props.followstate.following.length} following`}
          </a>
        </li>

        <div className="users-list">

          <div className="modal z-depth-0 white " id="following-modal">
            {this.props.followstate.following.map(user => (
              <div key={user.id} className="follower-detail">
                <img
                  className="notification-avatar"
                  alt="profile-pic"
                  data-id={user.id}
                  src={user.image}
                />
                <div className="follow-username">
                  {`${user.username}`}
                </div>

                {(localStorage.getItem('user') !== user.username)
                  ? (
                    <div className="follow-button">
                      <FollowUnfollow username={user.username} />
                    </div>
                  )
                  : null
                  }
              </div>
            ))}
          </div>

          <div className="modal z-depth-0 white" id="followers-modal">
            {this.props.followstate.followers.map(user => (
              <div key={user.id} className="follower-detail">
                <img
                  className="notification-avatar"
                  alt="profile-pic"
                  data-id={user.id}
                  src={user.image}
                />
                <div className="follow-username">
                  {`${user.username}`}
                </div>
                {(localStorage.getItem('user') !== user.username)
                  ? (
                    <div className="follow-button">
                      <FollowUnfollow username={user.username} following={user.following} />
                    </div>
                  )
                  : null
                }
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ followstate: state.followReducer });

export default connect(
  mapStateToProps, { followers: getfollowers, following: getfollowing },
)(Followers);
