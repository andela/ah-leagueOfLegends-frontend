import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LikeDislikeComments from '../../../components/LikeDislikeComments';
import { publishComment } from '../actions';
import { getComments as getComents } from './actions';

export class CommentsComponent extends Component {
  state = {
    // eslint-disable-next-line
    newComment: this.props.comments.body,
    edited: true,
  }

  componentDidMount() {
    const { allComment, slug } = this.props;
    allComment(slug);
  }

  newCommentsHandler(e) {
    const val = e.target.value;
    this.setState({ newComment: val });
  }

  publishNewCommentHandler() {
    const {
      allComment, manipulateComment, slug, comments,
    } = this.props;
    const { newComment } = this.state;
    manipulateComment(newComment, slug, 'PUT', true, comments.id);
    this.setState({ edited: false });
    allComment(slug);
  }

  render() {
    const {
      comments, clicked, componentIndex, index,
    } = this.props;
    const { newComment, edited } = this.state;
    return (
      <div className="comment-component">
        { (clicked && (componentIndex === index) && edited)
          ? (
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="textarea1"
                      value={newComment}
                      onChange={e => this.newCommentsHandler(e)}
                      className="materialize-textarea"
                    />
                    {/* eslint-disable-next-line */}
                  </div>
                </div>
              </form>
              <button type="button" className="button btn-edit-comment" onClick={() => this.publishNewCommentHandler()}>
                <i className="tiny material-icons" style={{ marginTop: 3 }}>edit</i>
                edit
              </button>
            </div>)
          : (
            <div>
              { comments.body }
              <br />
              <br />
              {/* eslint-disable-next-line */}
              <LikeDislikeComments id={this.props.comments.id} likes={this.props.comments.likes} dislikes={this.props.comments.dislikes} />
            </div>
          )
        }
      </div>
    );
  }
}

CommentsComponent.defaultProps = {
  comments: null,
  componentIndex: null,
};

CommentsComponent.propTypes = {
  allComment: PropTypes.func.isRequired,
  manipulateComment: PropTypes.instanceOf(Object).isRequired,
  comments: PropTypes.instanceOf(Object),
  clicked: PropTypes.bool.isRequired,
  componentIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ allComments: state.getAllComment });

const mapDispatchToProps = dispatch => bindActionCreators({
  allComment: getComents,
  manipulateComment: publishComment,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);
