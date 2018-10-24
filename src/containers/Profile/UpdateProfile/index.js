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
import NotFound from '../../../components/NotFound';

class UpdateProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      bio: '',
      image: '',
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    const { match } = this.props;
    props.fetchUserDetails(match.params.username)
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
    const { props } = this;
    const { username, bio } = this.state;
    const { history } = this.props;
    const profile = {
      user: {
        username,
        bio,
      },
    };
    props.updateUser(profile)
      .then(() => {
        toastr.success('Profile Update Success');
        const { viewProfileReducer } = this.props;
        const { payload } = viewProfileReducer.payload;
        const usernameUrl = (profile.user.username === '') ? payload.profile.username : profile.user.username;
        localStorage.setItem('user', profile.user.username);
        history.push(`/profile/${usernameUrl}`);
      }).catch((error) => {
        toastr.error(error);
      });
  }

  handleCancel(event) {
    event.preventDefault();
    const { match, history } = this.props;
    const { username } = match.params;
    history.replace(`/profile/${username}`);
  }

  render() {
    const { viewProfileReducer } = this.props;
    const { payload, isFetching, failure } = viewProfileReducer;
    const { username, bio, image } = this.state;
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
              <EditProfile
                username={username}
                bio={bio}
                image={image}
                onChange={this.handleChange}
                onSave={this.handleSave}
                onCancel={this.handleCancel}
              />
            </div>)}
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  viewProfileReducer: PropTypes.instanceOf().isRequired,
  match: PropTypes.instanceOf().isRequired,
  history: PropTypes.instanceOf().isRequired,

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
