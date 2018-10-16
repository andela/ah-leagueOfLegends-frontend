import React from 'react';
import PropTypes from 'prop-types';

const EditProfile = ({
  username, image, bio, onChange, onCancel, onSave,
}) => (
  <div>
    <div className="row">
      <form className="col m4 s12 offset-m3">
        <div className="avatar-wrapper">
          <img className="avatar" src={image} />
        </div>
        <div className="input-field ">
          <h5>Username</h5>
          <input id="username" type="text" className="validate" onChange={onChange} value={username} />
        </div>
        <div className="input-field ">
          <h5> Bio</h5>
          <input id="bio" type="tel" className="validate" onChange={onChange} value={bio} />
        </div>
      </form>
      <div className="row">
        <div className="col m4 s12 offset-m3">
          <button
            data-target="modal1"
            className="btn  btn-flat white grey-text"
            onClick={onSave}
          >
          Apply
          </button>
          <button
            data-target="modal1"
            className="btn  btn-flat white grey-text"
            onClick={onCancel}
          >
          Cancel
          </button>
        </div>
      </div>
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
