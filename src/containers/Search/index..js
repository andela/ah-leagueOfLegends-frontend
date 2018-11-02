import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { extractDescription } from '../Articles/Read/filterArticles';
import ArticleComponent from './RenderArticles';


export class SearchResults extends Component {
  componentDidMount() {}

  renderArticleHandler = () => {
    const { articles } = this.props;
    if (articles.length >= 1) {
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
          <div className="centered" key={article.slug}>
            <ArticleComponent
              key={article.slug}
              article={article}
              index={index}
              preview={preview}
            />
          </div>
        );
      },
      );
      if (!artcles) {
        return <h1>No Results found</h1>;
      }
      return artcles;
    }
    return (
      <div className="centered">
        {' '}
        <h1>No Results found</h1>
;
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.renderArticleHandler()}
      </div>
    );
  }
}

SearchResults.propTypes = { articles: PropTypes.instanceOf(Array).isRequired };

const mapStateToProps = state => ({ articles: state.Search.articles });

export default connect(mapStateToProps)(SearchResults);
