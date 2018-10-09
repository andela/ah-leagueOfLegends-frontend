import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import getArticles from './actions';
import '../../../styles/styles.css';


class Aside extends Component {
  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { articles } = this.props;

    const asideComp = articles.sort((a, b) => a.like < b.like).slice(0, 3);
    const asideDiv = asideComp.map((aside, index) => (
      <div key={aside.slug} className="hoverable card-content articlesComponent">
        <div className="aside-number">
          {0 + index + 1}
        </div>
        <h6>{aside.title}</h6>
        {aside.body}
      </div>
    ));
    return (
      <div className=" card aside-article">
        <h5 style={{ textAlign: 'center' }}>Popular On Authors Haven</h5>
        {
          asideDiv
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

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllArticles: getArticles,
  loading: '',
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
