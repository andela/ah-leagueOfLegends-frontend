import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import M from 'materialize-css';

import Header from "../../../components/Header";
import EditProfileModal from "../../../components/EditProfileModal";
import fetchUserDetails from './actions';

class ViewProfile extends Component {
    componentDidMount() {
        const { fetchUserDetails, match } = this.props;
        const username = match.params.username;
        fetchUserDetails(username);

        const elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }

    render() {
        const {payload,} = this.props.viewProfileReducer;
        return (
            <div>
                <Header username={payload.profile.username} image={payload.profile.image}/>
                <main className="conatiner">
                    <div className="row">
                        <div className="col m6 s12 offset-m3 profile">
                            <div className="user-info">
                                <div className="user-detail">
                                    <h4 className="username">{payload.profile.username}</h4>
                                    <button data-target="modal1"
                                            className="waves-effect waves-light btn  btn-flat white grey-text modal-trigger">
                                        Edit profile
                                    </button>
                                </div>
                                <p className="bio offset-s2">{payload.profile.bio}</p>
                                <ul className="followers-link">
                                    <li><a className="grey-text p-r-30" href="#"> 0 Following</a></li>
                                    <li><a className="grey-text" href="#"> 0 Followers</a></li>
                                </ul>
                            </div>
                            <div className="avatar-wrapper">
                                <img className="avatar" src={payload.profile.image}/>
                            </div>
                        </div>
                    </div>
                </main>
                <EditProfileModal username={payload.profile.username} bio={payload.profile.bio} image={payload.profile.image}/>
            </div>
        );
    }
}

ViewProfile.propTypes = {
    username: PropTypes.string.isRequired
};

//Takes a piece of your state
// which is part of the store
// and passes it into your component as a prop
const mapStateToProps = (state) => ({
    viewProfileReducer: state.viewProfileReducer
});

//Hook action with the container
//Passing the action as a prop
const matchDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchUserDetails: fetchUserDetails
        }, dispatch);


export default connect(
    mapStateToProps,
    matchDispatchToProps
)(ViewProfile);
