import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import { dislikeComments, likeComments } from '../../containers/LikeDislikeComments/actions';

import '../../styles/scss/components/_likeDislikeArticles.scss';

class LikeDislikeComments extends Component {
  constructor(props) {
    super(props);
    this.handleLikeDislikeComment = this.handleLikeDislikeComment.bind(this);
  }

  handleLikeDislikeComment(isLike) {
    if (localStorage.getItem('access_token')) {
      const { like, dislike, mainArticle } = this.props;
      const { slug } = mainArticle.payload;
      const { id } = this.props;
      if (isLike) {
        like(slug, id);
      } else {
        dislike(slug, id);
      }
    } else {
      toastr.error('Please Login/Register.');
    }
  }

  render() {
    const { likes, dislikes } = this.props;
    return (
      <div>
        <button
          className="btn-thumb-up"
          type="submit"
          onClick={() => this.handleLikeDislikeComment(true)}
        >
          <i className="material-icons" id="like">thumb_up</i>
          <span>{likes}</span>
        </button>
        <button
          type="submit"
          className="btn-thumb-down"
          onClick={() => this.handleLikeDislikeComment(false)}
        >
          <i className="material-icons" id="dislike">thumb_down</i>
          <span>{dislikes}</span>
        </button>
      </div>
    );
  }
}

LikeDislikeComments.propTypes = {
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mainArticle: PropTypes.shape().isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

const mapStateToProps = state => (
  {
    mainArticle: state.completeArticle,
    likeDislikeCommentReducer: state.likeDislikeCommentReducer,
  });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    dislike: dislikeComments,
    like: likeComments,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislikeComments);
