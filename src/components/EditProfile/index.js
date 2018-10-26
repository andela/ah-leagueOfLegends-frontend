import React from 'react';
import PropTypes from 'prop-types';

const EditProfile = ({
  username, image, bio, onChange, onCancel, onSave, validateForm,
}) => (
  <div>
    <div className="row">
      <form className="col m4 s12 offset-m3">
        <div className="avatar-wrapper">
          <img className="edit-avatar" src={image} alt="edit-avatar" />
        </div>
        <div className="input-field ">
          <h5>Username</h5>
          <input id="username" type="text" className="username" onChange={onChange} value={username} />
        </div>
        <div className="input-field ">
          <h5> Bio</h5>
          <textarea id="bio" cols={15} rows={10} className="materialize-textarea" onChange={onChange}>
            {bio}
          </textarea>
        </div>
      </form>
      <div className="row">
        <div className="col m4 s12 offset-m3">
          <button
            id="save"
            data-target="modal1"
            type="submit"
            className="btn  btn-flat white grey-text"
            onClick={onSave}
            disabled={username.length < 3 ? true : validateForm}
          >
          Apply
          </button>
          <button
            id="cancel"
            data-target="modal1"
            type="submit"
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
  validateForm: PropTypes.func.isRequired,

};

export default EditProfile;
