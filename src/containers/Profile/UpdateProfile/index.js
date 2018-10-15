import React, { Component } from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import toastr from 'toastr';

import updateUser from './actions';
import {Image} from 'cloudinary-react';
import fetchUserDetails from "../ViewProfile/actions";
import Header from "../../../components/ProfileHeader";

class UpdateProfile extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      bio: "",
      image: "",
      selectedFile: null};
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchUserDetails(this.props.match.params.username)
      .catch(error => {
        toastr.error(error)});

  }
  componentWillReceiveProps(nextProps) {
    const { username, bio, image } = nextProps.viewProfileReducer.payload.profile;
    this.setState({ username, bio, image })
  }
  handleImageUpload(){
    this.cloudinary.openUploadWidget({ upload_preset: 'fntswd9v', tags: ['profpic'] },
      (error, result) => {
        const { updateUser: updateImage } = this.props;
        this.setState({ image: result[0].public_id });
        updateImage({ user: this.state });
      });
  }
  handleChange(e) {
    // console.log('=>',e.target.value)
    const { value } = e.target;


    this.setState({
      [e.target.id]: value,
    });
  };
  handleSave(e) {
    const { username, bio } = this.state;
    const profile ={
      user: {
        username,
        bio
      }
    };
    this.props.updateUser(profile)
      .then((res) => {
        console.log('I am a succeess toaster');
        toastr.success('Profile Update Success');
        // this.props.history.push('/courses');
        const {payload,} = this.props.viewProfileReducer;
        const username = ( profile.user.username === '') ? payload.profile.username :profile.user.username;
        this.props.history.push(`/profile/${username}`);
      }).catch(error => {
      toastr.error(error);
    });
  }

  handleCancel(event) {
    event.preventDefault();
    console.log('was cancelled');
    const username = this.props.match.params.username;
    this.props.history.replace(`/profile/${username}`);
  }


  render() {
    const {payload,} = this.props.viewProfileReducer;
    console.log(this.state);
    return (
      <div>
        <Header username={payload.profile.username} image={payload.profile.image}/>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field ">
                <h5>Username</h5>
                <input id="username" type="text" className="validate" onChange={this.handleChange} value={this.state.username}/>
              </div>
              <div className="input-field ">
                <h5> Bio</h5>
                <input id="bio" type="tel" className="validate" onChange={this.handleChange} value={this.state.bio}/>
              </div>
            </div>
            <div className="avatar-wrapper">
              <button onClick={this.handleImageUpload}>Upload</button>
              <Image cloudName="authorshaven2018" publicId=""/>
              <i className="material-icons">add_a_photo<img className="avatar" src={payload.profile.image}/></i>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button data-target="modal1"
                  className="modal-close waves-effect waves-light btn  btn-flat white grey-text"
                  onClick={this.handleSave}
          >Apply
          </button>
          <button data-target="modal1"
                  className="modal-close waves-effect waves-light btn  btn-flat white grey-text"
                  onClick={this.handleCancel}
          >Cancel
          </button>
        </div>

      </div>
    );
  }
}

UpdateProfile.propTypes = {};

const mapStateToProps = (state) => ({
  viewProfileReducer: state.viewProfileReducer,
  editProfileReducer: state.editProfileReducer
});
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUserDetails: fetchUserDetails,
      updateUser: updateUser
    }, dispatch);
export default connect(
  mapStateToProps,matchDispatchToProps
)(UpdateProfile);
