import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { publishComment } from './actions';
import { getComments as getComents } from './getComents/actions';

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { inputData: '' };
    this.publishCommentHandler = this.publishCommentHandler.bind(this);
  }


  inputCommentHandler = (e) => {
    e.preventDefault();
    const data = e.target.value;
    this.setState({ inputData: data });
  }

  publishCommentHandler() {
    const { newComment, articleSlug, allComments } = this.props;
    const { inputData } = this.state;
    if (articleSlug !== undefined) {
      newComment(inputData, articleSlug, 'POST');
    }
    allComments(articleSlug);
    this.setState({ inputData: '' });
    allComments(articleSlug);
  }

  render() {
    const { inputData } = this.state;
    const userName = localStorage.getItem('user');
    return (
      <div className="new-comments">
        <div className="card-content author-info">
          <img
            className="avatar-small"
            alt="User Profile"
            style={{ marginTop: 15 }}
            src={localStorage.getItem('user_img')}
          />
          <div className="articale-time">
            <p>
              <a href="/">{userName}</a>
            </p>
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12 text-area-input-text">
                <textarea id="textarea1" placeholder="New Comment" value={inputData} onChange={this.inputCommentHandler} className="materialize-textarea" />
              </div>
            </div>
          </form>
        </div>
        {/* eslint-disable-next-line */}
        <a className="waves-effect waves-light btn comment-publish-btn" onClick={this.publishCommentHandler}>Publish</a>
      </div>
    );
  }
}

Comments.defaultProps = { articleSlug: '' };

Comments.propTypes = {
  newComment: PropTypes.func.isRequired,
  articleSlug: PropTypes.string,
  allComments: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ commentsReducer: state.commentReducer });

const mapDispatchToProps = dispatch => bindActionCreators({
  newComment: publishComment,
  allComments: getComents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
