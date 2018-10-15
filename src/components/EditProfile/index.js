import React from 'react';
import PropTypes from 'prop-types';

const EditProfile = ({
  username, image, bio, save, onChange, onButtonClick, onImageClick, onCancel, onSave,
}) => (
  <div>
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field ">
            <h5>Username</h5>
            <input id="username" type="text" className="validate" onChange={onChange} value={username} />
          </div>
          <div className="input-field ">
            <h5> Bio</h5>
            <input id="bio" type="tel" className="validate" onChange={onChange} value={bio} />
          </div>
        </div>
        <div className="avatar-wrapper">

          <i className="material-icons">
            add_a_photo
            <img className="avatar" src={image} />
          </i>
        </div>
      </form>
    </div>
    <div className="modal-footer">
      <button
        data-target="modal1"
        className="modal-close waves-effect waves-light btn  btn-flat white grey-text"
        onClick={onSave}
      >
        Apply
      </button>
      <button
        data-target="modal1"
        className="modal-close waves-effect waves-light btn  btn-flat white grey-text"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  </div>

);

EditProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

};

export default EditProfile;
