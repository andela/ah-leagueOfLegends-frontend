import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import publishComment from './actions';

class Comments extends Component {
  state = { inputData: undefined };

  inputCommentHandler = (e) => {
    const data = { comment: { body: e.target.value } };
    this.setState({ inputData: data });
  }

  publishCommentHandler = () => {
    const { newComment, articleSlug } = this.props;
    const { inputData } = this.state;
    if (articleSlug !== undefined) {
      newComment(inputData, articleSlug, 'POST');
    }
  }

  render() {
    return (
      <div className="new-comments">
        <div className="card-content author-info">
          <img
            className="avatar-small"
            alt="User Profile"
            style={{ marginTop: 15 }}
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
          />
          <div className="articale-time">
            <p>
              <a href="/">Gilbert Ngeywo</a>
            </p>
            <div className="article-time--details">
              Time Created
            </div>
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" onChange={this.inputCommentHandler} className="materialize-textarea" />
                {/* eslint-disable-next-line */}
                <label htmlFor="textarea1">New Comment</label>
              </div>
            </div>
          </form>
        </div>
        {/* eslint-disable-next-line */}
        <a className="waves-effect waves-light btn" onClick={this.publishCommentHandler}>Publish</a>
      </div>
    );
  }
}

Comments.defaultProps = { articleSlug: '' };

Comments.propTypes = {
  newComment: PropTypes.instanceOf(Object).isRequired,
  articleSlug: PropTypes.string,
};

const mapStateToProps = state => ({ commentsReducer: state.commentReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ newComment: publishComment },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
