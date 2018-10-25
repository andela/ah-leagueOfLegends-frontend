import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/styles.css';

const articleComponent = (props) => {
  const { article, preview } = props;
  switch (props.index) {
    case 0:
      return (
        <div key={article.slug} className=" card hoverable articles-landing">
          <div className="card-content">
            <div className="card-content author-info">
              <img className="avatar-small" alt="User Profile" src={article.author.image} />
              <div className="articale-time">
                <p>
                  <a href="/">{article.author.username}</a>
                </p>
                <div className="article-time--details">
                  <p>{article.created_at_date.substring(0, 17)}</p>
                  <span className="r-l-spacer">.</span>
                  <p>2 min</p>
                </div>
              </div>
            </div>
            <span className="article-title">{article.title}</span>
            <p>
              {preview}
              {/* eslint-disable-next-line */}
              ...
              <Link to={`/article/${article.slug}`}>Read More </Link>
            </p>
          </div>
          <div className="like-dislike">
            <i className="material-icons" id="like">
              thumb_up
            </i>
            <span>{article.like}</span>
            <i className="material-icons" id="dislike">
              thumb_down
            </i>
            <span>{article.dislike}</span>
          </div>
        </div>
      );
    case 1:
      return (
        <div key={article.slug} className="card hoverable article-aside">
          <div className="card-content">
            <span className="article-title">{article.title}</span>
            <p>
              {preview}
              {/* eslint-disable-next-line */}
              ...
              <Link to={`/article/${article.slug}`}>Read More</Link>
            </p>
          </div>
        </div>
      );
    case 2:
      return (
        <div key={article.slug} className=" card hoverable article-aside">
          <div className="card-content">
            <span className="article-title">{article.title}</span>
            <p>
              {preview}
              {/* eslint-disable-next-line */}
              ...
              <Link to={`/article/${article.slug}`}>Read More</Link>
            </p>
          </div>
        </div>
      );
    default:
      return (
        <div key={article.slug} className="card hoverable article-default">
          <div className="card-content">
            <div className="card-content author-info">
              <img className="avatar-small" alt="User Profile" src={article.author.image} />
              <div className="articale-time">
                <p>
                  <a href="/">{article.author.username}</a>
                </p>
                <div className="article-time--details">
                  <p>{article.created_at_date.substring(0, 17)}</p>
                  <span className="r-l-spacer">.</span>
                  <p>2 min</p>
                </div>
              </div>
            </div>
            <span className="article-title">{article.title}</span>
            <p>
              {preview}
              {/* eslint-disable-next-line */}
              ...
              <Link to={`/article/${article.slug}`}>Read More</Link>
            </p>
          </div>
          <div className="like-dislike">
            <i className="material-icons" id="like">
              thumb_up
            </i>
            <span>{article.like}</span>
            <i className="material-icons" id="dislike">
              thumb_down
            </i>
            <span>{article.dislike}</span>
          </div>
        </div>
      );
  }
};

export default articleComponent;
