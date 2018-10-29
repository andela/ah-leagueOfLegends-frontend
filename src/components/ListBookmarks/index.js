import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Bookmrks from './bookmarks';
import Loader from '../Loader';
import NotFound from '../NotFound';

/**
 * @return {string}
 */
function ListBookmarks(props) {
  const { viewProfileReducer } = props;
  const { isFetching } = viewProfileReducer;
  const { profile } = viewProfileReducer.loggedInUser;

  let bookmarks = [];
  if (profile.bookmarks) {
    try {
      bookmarks = profile.bookmarks.map(
        // eslint-disable-next-line
        (bookmarkList, index) => (<Bookmrks bookmarkList={bookmarkList} key={index} />),
      );
    } catch (e) {
      return <NotFound item="Bookmarks" />;
    }
  }
  if (isFetching) {
    return (
      <Loader />
    );
  }
  if (bookmarks.length === 0) {
    return (
      <h1 className="bookmark-header-none">
        {' '}
        {profile.username}
        {' '}
        You have no bookmarks
        {' '}
      </h1>
    );
  }
  return (

    <div className="bookmark-articles">
      <h1 className="bookmark-header">
        {' '}
        {profile.username}
        {' '}
                Bookmarks
        {' '}
      </h1>

      { bookmarks }

    </div>
  );
}

ListBookmarks.propTypes = { viewProfileReducer: PropTypes.func.isRequired };

const mapStateToProps = state => ({ viewProfileReducer: state.viewProfileReducer });

export default connect(
  mapStateToProps,
)(ListBookmarks);
