import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import '../../../styles/styles.css';
import getArticles from './actions';
import Aside from './aside';
import ArticleComponent from './articleComponents';
import { extractDescription } from './filterArticles';
import Navbar from '../../../components/Navbar';
import Register from '../../../components/Authentication/Signup/Register';
import Login from '../../Authentication/Login/Login';
import { dislikeArticle, likeArticle } from '../../LikeDislike/actions';


class ReadArticle extends Component {
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
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  componentWillReceiveProps(nextProps) {
    const { article } = nextProps;
    const { likes_count, dislikes_count } = article;
    this.setState({ article, likes_count, dislikes_count });
  }

  handleLikeDislike(e) {
    e.preventDefault();
    const { like, dislike } = this.props;
    const { match } = this.props;
    if (localStorage.getItem('token')) {
      if (e.target.id === 'like') {
        like(match.params.slug);
      } else if (e.target.id === 'dislike') {
        dislike(match.params.slug);
      }
    } else {
      return ('Please login/sign up');
    }
  }

  renderArticleHandler = () => {
    const { articles } = this.props;
    const artcles = articles.map((article, index) => {
      let b;
      try {
        b = JSON.parse(article.body);
      } catch (e) {
        return false;
      }
      const { blocks } = b;
      if (!blocks) return false;
      const p = extractDescription(blocks);
      const prevw = p ? p.text : '';
      const preview = prevw.slice(0, 220);
      return (
        <ArticleComponent
          key={article.slug}
          article={article}
          index={index}
          preview={preview}

        />

      );
    },
    );
  }

  render() {
    return (
      <div className="article-landing-page" style={{ marginLeft: 50, marginBottom: '50%' }}>
        <Aside />
        { this.renderArticleHandler()}
      </div>
    );
  }
}

ReadArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getAllArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles.all_articles,
  loading: '',
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getAllArticles: getArticles,
    loading: '',
    // dislike: dislikeArticle,
    // like: likeArticle,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadArticle);
