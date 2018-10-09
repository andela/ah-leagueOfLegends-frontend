import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import '../../../styles/styles.css';
import { getArticles } from './actions';
import ArticleHeader from '../../../components/Header';
import Aside from './aside';

class ReadArticle extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="article-landing-page">
        <ArticleHeader />
        <Aside />
        {
        articles.map((article, index) => {
          switch (index) {
            case 0:
              return (
                <div key={article.slug} className=" card hoverable articles-landing">
                  <div className="card-content">
                    <div className="card-content author-info">
                      <img
                        className="avatar-small"
                        alt="User Profile"
                        src="https://api.adorable.io/avatars/285/abott@adorable.png"
                      />
                      <div className="articale-time">
                        <p>
                          <a href="/">{ article.author }</a>
                        </p>
                        <div className="article-time--details">
                          <p>{ article.created_at_date.substring(0,17) }</p>
                          <span className="r-l-spacer">.</span>
                          <p>2 min</p>
                        </div>
                      </div>
                    </div>
                    <span className="article-title">{ article.title }</span>
                    <p>{article.body}</p>
                  </div>
                  <div className="card-action">
                    <ul className="grey-text actions">
                      <li>
                        <i className="material-icons teal-text">thumb_up</i>
                        2
                      </li>
                      <li>
                        <i className="material-icons">thumb_down</i>
                        329
                      </li>
                      <li>
                        <i className="material-icons">bookmark_border</i>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            case 1:
              return (
                <div key={article.slug} className="card hoverable article-aside">
                  <div className="card-content">
                    <span className="article-title">{article.title}</span>
                    <p>{article.body}</p>
                  </div>
                </div>
              );
            case 2:
              return (
                <div key={article.slug} className=" card hoverable article-aside">
                  <div className="card-content">
                    <span className="article-title">{article.title}</span>
                    <p>{article.body}</p>
                  </div>
                </div>
              );
            default:
              return (
                <div key={article.slug} className= "card hoverable article-default">
                  <div className="card-content">
                    <div className="card-content author-info">
                      <img
                        className="avatar-small"
                        alt="User Profile"
                        src="https://api.adorable.io/avatars/285/abott@adorable.png"
                      />
                      <div className="articale-time">
                        <p>
                          <a href="/">{ article.author }</a>
                        </p>
                        <div className="article-time--details">
                          <p>{ article.created_at_date.substring(0,17) }</p>
                          <span className="r-l-spacer">.</span>
                          <p>2 min</p>
                        </div>
                      </div>
                    </div>
                    <span className="article-title">{ article.title }</span>
                    <p>{article.body}</p>
                  </div>
                  <div className="card-action">
                    <ul className="grey-text actions">
                      <li>
                        <i className="material-icons teal-text">thumb_up</i>
                        2
                      </li>
                      <li>
                        <i className="material-icons">thumb_down</i>
                        329
                      </li>
                      <li>
                        <i className="material-icons">bookmark_border</i>
                      </li>
                    </ul>
                  </div>
                </div>);
          }
        },
        )
        }
      </div>
    );
  }
}

ReadArticle.propTypes = {
  articles: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles.all_articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReadArticle);
