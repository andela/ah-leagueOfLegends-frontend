import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import '../../../styles/styles.css';
import getArticles from './actions';
import ArticleHeader from '../../../components/Header';
import Aside from './aside';
import ArticleComponent from './articleComponents';

class ReadArticle extends Component {
  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="article-landing-page">
        <Aside />
        {articles.map((article, index) => (
          <ArticleComponent key={article.slug} article={article} index={index} />
        ))}
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
