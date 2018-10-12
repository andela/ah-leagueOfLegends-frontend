import React from 'react';

const EditProfileModal =({username, image, bio}) => {
    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <div className="avatar-name">
                    <div className="edit-name">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <input id="last_name" type="text" className="validate" value={username}/>
                            <input id="bio" type="text" className="validate" value={bio}/>
                    </div>
                    </div>
                    <div className="avatar-wrapper">
                        <img className="img-circle avatar edit-avatar" src={image}/>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button data-target="modal1"
                        className="modal-close waves-effect waves-light btn  btn-flat white grey-text">Apply
                </button>
                <button data-target="modal1"
                        className="modal-close waves-effect waves-light btn  btn-flat white grey-text">Cancel
                </button>
            </div>
        </div>
    );
};

export default EditProfileModal;
