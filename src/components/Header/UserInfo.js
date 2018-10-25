import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import '../../styles/styles.css';
import fetchUserDetailsAction from '../../containers/Profile/ViewProfile/actions';


class ArticleHeader extends Component {
  state = {
    profileClicked: false,
    publishClicked: false,
  }

  componentDidMount() {
    const {
      getTags, removeTag, tags, fetchUserDetails, username,
    } = this.props;
    const chip = document.querySelectorAll('.chips');
    M.Chips.init(chip, {
      placeholder: 'Enter your tags ...',
      onChipAdd: getTags,
      onChipDelete: removeTag,
      data: tags.map(tag => ({ tag })),
    });
    const el = document.querySelectorAll('.modal13');
    /* eslint-disable-next-line */
    const instances = M.Modal.init(el);
    fetchUserDetails(username);
  }

  profileDropDownhandler = () => (
    this.setState(prevState => ({ profileClicked: !prevState.profileClicked }))
  );

  publishClickedHandler = () => (
    this.setState(prevState => ({ publishClicked: !prevState.publishClicked }))
  );

  render() {
    const { publishHandler, viewProfileReducer, username } = this.props;
    const { profile } = viewProfileReducer.loggedInUser;
    return (
      <div>
        <div style={{ width: '70%', marginLeft: '20%', marginTop: '2%' }}>
          <div className="author-info">
            <img
              className="avatar-small"
              src={profile.image}
              alt="User Profile Pic"
              style={{ marginTop: 10 }}
            />
            <div className="articale-time">
              <p>
                {username}
                {' '}
              </p>
              <div className="article-time--details" style={{ padding: 1 }}>
                {profile.bio}
              </div>
            </div>
            <a
              className="modal-trigger btn publish-article-button"
              href="#modal13"
              style={{ position: 'absolute', right: '20%' }}
            >
            Ready to Publish

            </a>
          </div>
        </div>
        <div className="mdl-publish-article">
          <div
            className="modal publish-modal z-depth-0"
            id="modal13"
            style={{ width: '30%', right: '10%' }}
          >
            <div className="container">

              <h6><b>Prepare your story for readers</b></h6>
          Add or change tags (up to 5) so readers know what your story is about.
              <br />
              <div className="chips chips-placeholder" />
              <br />
              <br />
              <button type="button" className="publish-button" onClick={publishHandler}>
            Publish Now
              </button>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

ArticleHeader.propTypes = {
  publishHandler: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  tags: PropTypes.instanceOf(Object).isRequired,
  viewProfileReducer: PropTypes.instanceOf(Object).isRequired,
  username: PropTypes.instanceOf(Object).isRequired,
  fetchUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ viewProfileReducer: state.viewProfileReducer });

const mapDispatchToProps = dispatch => bindActionCreators(
  { fetchUserDetails: fetchUserDetailsAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleHeader);
