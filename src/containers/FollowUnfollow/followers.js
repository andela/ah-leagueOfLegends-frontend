import React from 'react';
import { connect } from 'react-redux';
import { getfollowers, getfollowing } from './actions';

class Followers extends React.Component {
  // componentWillMount() {
  //   const { followers } = this.props;
  //   console.log(followers(this.props.username), 'UYUYUYUUYUUUYUYU');
  // }

  // state = { following: false, followers: false }

  // static getDerivedStateFromProps(props) {
  //   const { followers } = props;
  //   const { following } = props;
  //   if (props.username) {
  //     if (!this.state.followers !== props.followers && this.state.following !== props.following) {
  //       followers(props.username);
  //       this.setState({ followers: props.profile.followers });
  //       following(props.username);
  //       this.setState({ following: props.profile.followers });
  //     }
  //   }
  // }

  static getDerivedStateFromProps(props) {
    const { followers } = props;
    const { following } = props;
    if (props.username) {
      followers(props.username);
      following(props.username);
    }
  }
  // handlefollowing = () => {
  //   const { followers } = this.props;
  //   console.log(followers(this.props.username), '-------');
  // }

  render() {
    return (
      <div className="">
        <li>
          <a className="grey-text p-r-30" href="#/">
           followers
          </a>
        </li>
        <li>
          <a className="grey-text" href="#/">
          following
          </a>
        </li>
      </div>
    );
  }
}

// Followers.propTypes = { followUnfollow: PropTypes.func.isRequired };

const mapStateToProps = state => ({ followstate: state.followReducer });

export default connect(
  mapStateToProps, { followers: getfollowers, following: getfollowing },
)(Followers);
