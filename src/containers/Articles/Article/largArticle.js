import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dante from 'Dante2';
// import '../../../styles/scss/components/_likeDislikeArticles.scss';
import fetchArticles from './actions';
import UsrInfo from '../Create/userInfo';
import Rating from '../../../components/Rating/Rating';
import Commnents from '../../comments';
import DisplayComents from '../../comments/getComents/displayComments';
import { dislikeArticles, likeArticles } from '../../LikeDislike/actions';
import likeDislikeArticleReducer from '../../LikeDislike/reducer';

class MainArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      likes_count: 0,
      dislikes_count: 0,
    };
    this.handleLikeDislike = this.handleLikeDislike.bind(this);
  }

  componentDidMount() {
    const { match, fetchOneArticles } = this.props;
    fetchOneArticles(match.params.s);
  }

  handleLikeDislike(isLike) {
    if (isLike) {
      const isLiking = this.props.likeDislikeArticleReducer.isLiking;
      if (isLiking) {
        this.setState({ likes_count: this.state.likes_count - 1 });
      } else this.state.likes_count++;
    }
    console.log('slug I need', this.props.mainArticle.payload.slug);
    console.log('fdfghjdrftghj', localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token')) {
      // do the liking or disliking
      console.log('calling....');
      this.props.like(this.props.slug);
    } else {
    //   return('Please login/sign up');
    }
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
    let articleSlug;
    if (mainArticle.payload.slug) {
      articleSlug = mainArticle.payload.slug;
    }
    return (
      <div>
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
        <UsrInfo />
        <button type="button" onClick={this.editClickedHanlder} className="button">
                    Edit
        </button>
        <Rating
          slug={this.props.mainArticle.payload.slug}
          average_rating={this.props.mainArticle.payload.average_ratings}
        />
        <div className="main-article">
          {this.renderArticleHandler()}
          <Commnents articleSlug={articleSlug} />
          <DisplayComents articleSlug={match.params.s} />
          <h1>Like and dislike coming here</h1>
          <button className="icon_btn" onClick={() => this.handleLikeDislike(true)}>
            <i className="material-icons" id="like">thumb_up</i>
            <span>{this.state.likes_count}</span>
          </button>
        </div>

      </div>


    );
  }
}

MainArticle.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  fetchOneArticles: PropTypes.func.isRequired,
  mainArticle: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    mainArticle: state.completeArticle,
    likeDislikeArticleReducer,
  });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchOneArticles: fetchArticles,
    dislike: dislikeArticles,
    like: likeArticles,
  },
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArticle);
