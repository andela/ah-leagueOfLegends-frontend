import React from 'react';
import PropTypes from 'prop-types';

const BookmarkArticles = ({ disabled, onBookmarkClick, bookmark }) => (
  <div>
    <button
      disabled={disabled}
      className="btn-bookmark"
      type="submit"
      onClick={onBookmarkClick}
    >
      <i className="material-icons" id="bookmark">
        {bookmark ? 'bookmark' : 'bookmark_border'}
      </i>
    </button>
  </div>
);

BookmarkArticles.propTypes = {
  disabled: PropTypes.string.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  bookmark: PropTypes.string.isRequired,
};

export default BookmarkArticles;
