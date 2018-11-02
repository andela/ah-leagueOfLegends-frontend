import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import fetchArticles from '../Articles/Article/actions';

// eslint-disable-next-line
import '../../styles/scss/components/_bookmarkArticles.scss';
import { bookmarkArticles } from './actions';
import bookmarkArticlesReducer from './reducers';
import BookmarkArticle from '../../components/BookmarkArticle/index';

export class BookmarkArticles extends Component {
  constructor(props) {
    super(props);
    this.state = { isBookmark: '' };
    this.handleBookmarkArticle = this.handleBookmarkArticle.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.mainArticle.payload.bookmarked !== undefined) {
      return { isBookmark: nextProps.mainArticle.payload.bookmarked };
    }
    return null;
  }

  handleBookmarkArticle() {
    if (localStorage.getItem('access_token')) {
      const { bookmark, mainArticle } = this.props;
      const { slug } = mainArticle.payload;
      bookmark(slug);
      fetchArticles(slug);
    } else {
      toastr.error('Please Login/Register.');
    }
  }

  render() {
    const { mainArticle } = this.props;
    const { isBookmark } = this.state;
    return (
      <div>
        <BookmarkArticle
          disabled={mainArticle.isFetching}
          onBookmarkClick={() => this.handleBookmarkArticle()}
          bookmark={isBookmark}
        />
      </div>
    );
  }
}

BookmarkArticles.propTypes = {
  bookmark: PropTypes.string.isRequired,
  mainArticle: PropTypes.objectOf().isRequired,

};

const mapStateToProps = state => (
  {
    mainArticle: state.completeArticle,
    bookmarkArticlesReducer,
  });

const mapDispatchToProps = dispatch => bindActionCreators(
  { bookmark: bookmarkArticles },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkArticles);
