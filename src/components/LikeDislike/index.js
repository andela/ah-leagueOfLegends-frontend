import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import likeDislikeArticleReducer from '../../containers/LikeDislike/reducer';
import { dislikeArticles, likeArticles } from '../../containers/LikeDislike/actions';
// eslint-disable-next-line
import '../../styles/scss/components/_likeDislikeArticles.scss';

class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.handleLikeDislike = this.handleLikeDislike.bind(this);
  }


  handleLikeDislike(isLike) {
    if (localStorage.getItem('access_token')) {
      const { like, dislike, mainArticle } = this.props;
      const { slug } = mainArticle.payload;
      if (isLike) {
        like(slug);
      } else {
        dislike(slug);
      }
    } else {
      toastr.error('Please Login/Register.');
    }
  }

  render() {
    const { mainArticle } = this.props;
    return (
      <div>
        <button
          disabled={mainArticle.isFetching}
          className="btn-thumb-up"
          type="submit"
          onClick={() => this.handleLikeDislike(true)}
        >
          <i className="material-icons" id="like">thumb_up</i>
          <span>{mainArticle.payload.like}</span>
        </button>
        <button
          disabled={mainArticle.isFetching}
          type="submit"
          className="btn-thumb-down"
          onClick={() => this.handleLikeDislike(false)}
        >
          <i className="material-icons" id="dislike">thumb_down</i>
          <span>{mainArticle.payload.dislike}</span>
        </button>

      </div>
    );
  }
}

LikeDislike.propTypes = {
  like: PropTypes.number.isRequired,
  dislike: PropTypes.number.isRequired,
  mainArticle: PropTypes.objectOf().isRequired,

};

const mapStateToProps = state => (
  {
    mainArticle: state.completeArticle,
    likeDislikeArticleReducer,
  });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    dislike: dislikeArticles,
    like: likeArticles,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislike);
