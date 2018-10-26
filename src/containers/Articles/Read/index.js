import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import '../../../styles/styles.css';
import { getArticles } from './actions';
import Aside from './aside';
import ArticleComponent from './articleComponents';
import { extractDescription } from './filterArticles';
import Tags from '../../../components/tags/index';
import { BACKEND_URL } from '../../../utils/config';
import NotFound from '../../../components/NotFound';

class ReadArticle extends Component {
  state = {
    offset: 0,
    perPage: 10,
    pageCount: 1,
  }

  componentDidMount() {
    const { getAllArticles } = this.props;
    const { perPage, offset } = this.state;
    getAllArticles(perPage, offset);
    getAllArticles(perPage, offset);
    axios.get(`${BACKEND_URL}api/articles`)
      .then((res) => {
        const pageCount = Math.ceil(res.data.articles.count / res.data.articles.results.length);
        this.setState({ pageCount });
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
  }

  handlePageClick = (data) => {
    const { selected } = data;
    const { perPage } = this.state;
    const { getAllArticles } = this.props;
    const offset = Math.ceil(selected * perPage);
    this.setState({ offset }, () => {
      getAllArticles(perPage, offset);
    });
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
      return (<NotFound item="Article" />);
    }
    return artcles;
  };

  render() {
    const { pageCount } = this.state;
    return (
      <div>
        <div className="article-landing-page" style={{ marginLeft: 50, marginBottom: '50%' }}>
          <Aside />
          <Tags />
          { this.renderArticleHandler()}
        </div>
        <div className="pagination-lable">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel={<a href="">...</a>}
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName="pagination"
            activeClassName="page-item active"
            disabledClassName="page-item disabled"
            pageClassName="page-item"
            extraAriaContext="Page navigation example"
          />
        </div>
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
  loading: state.articles.loading,
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
