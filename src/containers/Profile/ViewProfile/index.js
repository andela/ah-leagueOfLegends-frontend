import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import ProfileHeader from '../../../components/ProfileHeader';
import ViewProfiles from '../../../components/ViewProfiles';
import Loader from '../../../components/Loader';
import fetchUserDetails from './actions';
import updateUser from '../UpdateProfile/actions';

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUsername: null,
      image: '',
    };
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentDidMount() {
    const { fetchUserDetails, match } = this.props;
    const username = match.params.username;
    fetchUserDetails(username);
  }

  handleImageUpload() {
    window.cloudinary.openUploadWidget({ upload_preset: 'fntswd9v', tags: ['profpic'] },
      (error, result) => {
        const { username, bio } = this.props.viewProfileReducer.payload.profile;
        console.log(username);
        this.setState({ image: result[0].secure_url });
        const { updateUser } = this.props;
        updateUser({
          user: {
            username,
            bio,
            image: this.state.image,
          },
        });
        window.location.reload();
      });
  }

  handleEditUser() {
    const selectedUsername = this.props.match.params.username;
    if (selectedUsername) {
      this.setState({ selectedUsername: undefined });
      this.props.history.push(`/profile/${selectedUsername}/edit`);
    }
  }

  render() {
    const { payload, isFetching } = this.props.viewProfileReducer;
    if (isFetching) {
      return (
        <Loader />
      );
    }
    return (
      <div>
        <ProfileHeader username={payload.profile.username} image={payload.profile.image} />
        <ViewProfiles
          username={payload.profile.username}
          image={payload.profile.image}
          bio={payload.profile.bio}
          publicId={payload.profile.image}
          onEditClick={this.handleEditUser}
        />
        <button onClick={this.handleImageUpload}>
          <i className="material-icons">
          add_a_photo
          </i>
        </button>
      </div>
    );
  }
}

ViewProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  viewProfileReducer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetchUserDetails: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,

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
