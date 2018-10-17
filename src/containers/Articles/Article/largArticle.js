import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dante from 'Dante2';

import fetchArticles from './actions';
import UsrInfo from '../Create/userInfo';
import Rating from '../../../components/Rating/Rating';
import Commnents from '../../comments';
import DisplayComents from '../../comments/getComents/displayComments';
import LikeDislike from '../../../components/LikeDislike';
import ProfileHeader from '../../../components/ProfileHeader';
import fetchUserDetails from '../../Profile/ViewProfile/actions';


class MainArticle extends Component {
  componentDidMount() {
    const { match, fetchOneArticles } = this.props;
    fetchOneArticles(match.params.s);
    const usernameAvatar = localStorage.getItem('user');
    fetchUserDetails(usernameAvatar);
  }

  editClickedHanlder = () => {
    const { history } = this.props;
    const urlPath = history.location.pathname;
    history.push(`${urlPath}/edit`);
  };

  renderArticleHandler = () => {
    const { mainArticle } = this.props;
    let articleData;
    if (mainArticle.payload.body) {
      articleData = JSON.parse(mainArticle.payload.body);

      return <Dante read_only content={articleData} />;
    }
    return null;
  };

  render() {
    const { mainArticle, match } = this.props;
    const { viewProfileReducer } = this.props;
    const { payload } = viewProfileReducer;
    const { mainArticle } = this.props;

    const { author } = mainArticle.payload;
    let articleSlug;
    if (mainArticle.payload.slug) {
      articleSlug = mainArticle.payload.slug;
    }
    return (
      <div>
        <ProfileHeader image={payload.profile.image} />
        <div className="tag-list">
          {mainArticle.payload.tagList
            ? mainArticle.payload.tagList.map((tag, index) => (
                // eslint-disable-next-line
                <div className="chip" key={index}>
                  {tag}
                </div>
            ))
            : null}
        </div>

        {author !== undefined
        && <UsrInfo username={author} />
        }
        <button type="button" onClick={this.editClickedHanlder} className="button">
                    Edit
        </button>
        <Rating
          slug={mainArticle.payload.slug}
          average_rating={mainArticle.payload.average_ratings}
        />
        <div className="main-article">
          {this.renderArticleHandler()}
          <LikeDislike />

          <Commnents articleSlug={articleSlug} />
          <DisplayComents articleSlug={match.params.s} />

        </div>
      </div>


    );
  }
}

MainArticle.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  fetchOneArticles: PropTypes.func.isRequired,
  mainArticle: PropTypes.instanceOf(Object).isRequired,
  viewProfileReducer: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({ mainArticle: state.completeArticle });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchOneArticles: fetchArticles }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArticle);
