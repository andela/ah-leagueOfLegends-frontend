import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArticles } from './actions';
import '../../../styles/styles.css';
import PropTypes from 'prop-types';


class Aside extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props;

    const aside = articles.sort((a, b) => a.like < b.like).slice(0, 3);
    const asideDiv = aside.map((aside, index) =>(
      <div key={aside.slug} className="hoverable card-content articlesComponent">
        <div className="aside-number">
          {0 + index + 1}
        </div>
        <h6>{aside.title}</h6>
        {aside.body}
      </div>
    ));
    return (
      <div className=" card asideArticle">
        <h5 style={{ textAlign:'center' }}>Popular On Authors Haven</h5>
        {
          asideDiv
        }
      </div>
    );
  }
}

Aside.propTypes = {
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles.all_articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
