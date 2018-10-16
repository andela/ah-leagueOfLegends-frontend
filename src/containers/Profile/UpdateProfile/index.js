import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import updateUser from './actions';
import fetchUserDetails from '../ViewProfile/actions';
import Header from '../../../components/ProfileHeader';
import EditProfile from '../../../components/EditProfile';
import Loader from '../../../components/Loader';

class UpdateProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      bio: '',
      image: '',
      selectedFile: null,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserDetails(this.props.match.params.username)
      .catch((error) => {
        toastr.error(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    const { username, bio, image } = nextProps.viewProfileReducer.payload.profile;
    this.setState({ username, bio, image });
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ [e.target.id]: value });
  }

  handleSave() {
    const { username, bio } = this.state;
    const profile = {
      user: {
        username,
        bio,
      },
    };
    console.log('you are here');
    this.props.updateUser(profile)
      .then(() => {
        toastr.success('Profile Update Success');
        const { payload } = this.props.viewProfileReducer;
        const username = (profile.user.username === '') ? payload.profile.username : profile.user.username;
        this.props.history.push(`/profile/${username}`);
      }).catch((error) => {
        toastr.error(error);
      });
  }

  handleCancel(event) {
    event.preventDefault();
    const username = this.props.match.params.username;
    this.props.history.replace(`/profile/${username}`);
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
        <Header username={payload.profile.username} image={payload.profile.image} />
        <EditProfile
          username={this.state.username}
          bio={this.state.bio}
          image={this.state.image}
          onChange={this.handleChange}
          onSave={this.handleSave}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  viewProfileReducer: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetchUserDetails: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  viewProfileReducer: state.viewProfileReducer,
  editProfileReducer: state.editProfileReducer,
});

const matchDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUserDetails,
    updateUser,
  }, dispatch);

export default connect(
  mapStateToProps, matchDispatchToProps,
)(UpdateProfile);
