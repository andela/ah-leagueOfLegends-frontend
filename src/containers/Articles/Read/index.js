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
import SocialLogin from '../../../components/Authentication/Login/socialLogin/SocialLogin';


class ReadArticle extends Component {
  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
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
    if (artcles === 0) {
      /* Not Found Component will be added here;
       Esther's Created it.
      */
    }
    return artcles;
  }

  render() {
    return (
      <div className="article-landing-page" style={{ marginLeft: 50, marginBottom: '50%' }}>
        <Navbar />
        <Register />
        <SocialLogin />
        <Login />
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
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadArticle);
