import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const articleComponent = (props) => {
  const { article, preview } = props;
  return (
    <div key={article.slug} className=" card hoverable articles-landing">
      <div className="card-content">
        <div className="card-content author-info">
          <img
            className="avatar-small"
            alt="User Profile"
            src={article.author.image}
          />
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
        <span className="article-title">{ article.title }</span>
        <p>
          {preview}
          {/* eslint-disable-next-line */}
                ...<Link to={`/article/${article.slug}`} >Read More</Link>
        </p>
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
};

articleComponent.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  preview: PropTypes.string.isRequired,
};

export default articleComponent;
