import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import getArticles from './actions';
import '../../../styles/styles.css';
import { extractDescription } from './filterArticles';

class Aside extends Component {
  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  renderAsideArticlehandler = () => {
    const { articles } = this.props;

    const asideComp = articles.sort((a, b) => a.like < b.like).slice(0, 3);
    const asideDiv = asideComp.map((aside, index) => {
      let b;
      try {
        b = JSON.parse(aside.body);
      } catch (e) {
        return false;
      }
      const { blocks } = b;
      if (!blocks) return false;
      const p = extractDescription(blocks);
      const prevw = p ? p.text : '';
      const preview = prevw.slice(0, 100);
      return (
        <div key={aside.slug} className="hoverable card-content articlesComponent">
          <div className="aside-number">
            {0 + index + 1}
          </div>
          <h6>{aside.title}</h6>
          {preview}
          {/* eslint-disable-next-line */}
          ...<Link to={`/article/${aside.slug}`} >Read More</Link>
        </div>
      );
    },
    );
    if (asideDiv === 0) {
      console.log('No Aside Data');
    }
    return asideDiv;
  }

  render() {
    return (
      <div className="card aside-article" style={{ position: 'absolute' }}>
        <h5 style={{ textAlign: 'center' }}>Popular On Authors Haven</h5>
        {
          this.renderAsideArticlehandler()
        }
      </div>
    );
  }
}

Aside.propTypes = {
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
)(Aside);
