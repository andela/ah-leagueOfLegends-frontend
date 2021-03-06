import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ViewProfiles from '../../../components/ViewProfile';
import Loader from '../../../components/Loader';
import fetchUserDetails from './actions';
import updateUser from '../UpdateProfile/actions';
import NotFound from '../../../components/NotFound';

export class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { image: '' };
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { match } = this.props;
    const { username } = match.params;
    await props.fetchUserDetails(username);
  }

  handleImageUpload() {
    window.cloudinary.openUploadWidget({ upload_preset: 'fntswd9v', tags: ['profpic'] },
      (error, result) => {
        const { viewProfileReducer } = this.props;
        const { username, bio } = viewProfileReducer.payload.profile;
        if (result === undefined) return false;
        this.setState({ image: result[0].secure_url });
        const { props, state } = this;
        props.updateUser({
          user: {
            username,
            bio,
            image: state.image,
          },
        });
        window.location.reload();
        return false;
      });
  }

  handleEditUser() {
    const { match, history } = this.props;
    const selectedUsername = match.params.username;
    const loggedinUsername = localStorage.getItem('user');
    if (selectedUsername === loggedinUsername) {
      history.push(`/profile/${selectedUsername}/edit`);
    } else {
      history.push(`/profile/${selectedUsername}`);
    }
  }

  render() {
    const { viewProfileReducer } = this.props;
    const { payload, isFetching, failure } = viewProfileReducer;

    const loggedinUsername = localStorage.getItem('user');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isFetching) {
      return (
        <Loader />
      );
    }
    return (
      <div>
        {failure
          ? (

            <NotFound item="User" />
          )
          : (
            <div>
              <ViewProfiles
                username={payload.profile.username}
                image={payload.profile.image}
                bio={payload.profile.bio}
                publicId={payload.profile.image}
                onEditClick={this.handleEditUser}
                avatarUpload={this.handleImageUpload}
                loggedinUsername={loggedinUsername}
                isAuthenticated={isAuthenticated}
                following={payload.profile.following}
              />

            </div>
          )
          }
      </div>
    );
  }
}

ViewProfile.propTypes = {
  viewProfileReducer: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

// Takes a piece of your state
// which is part of the store
// and passes it into your component as a prop
const mapStateToProps = state => ({ viewProfileReducer: state.viewProfileReducer });

// Hook action with the container
// Passing the action as a prop
const matchDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUserDetails,
    updateUser,
  }, dispatch);

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(ViewProfile);
