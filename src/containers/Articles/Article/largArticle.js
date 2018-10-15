import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dante from 'Dante2';

import fetchArticles from './actions';
import ArticleHeader from '../../../components/Header/Header';
import UsrInfo from '../Create/userInfo';

class MainArticle extends Component {
  componentDidMount() {
    const { match, fetchOneArticles } = this.props;
    fetchOneArticles(match.params.s);
  }

  renderArticleHandler = () => {
    const { mainArticle } = this.props;
    let articleData;
    if(mainArticle.payload.body) {
      articleData = JSON.parse(mainArticle.payload.body);

      return <Dante read_only content={articleData} />;
    }
    return null;
  }

  render() {
    const { mainArticle } = this.props;
    return (
      <div>
        <ArticleHeader />
        <div className="tag-list">
          {
          mainArticle.payload.tagList
            ? mainArticle.payload.tagList.map((tag, index) => (
            // eslint-disable-next-line
            <div className="chip" key={index} >{tag}</div>
            ),
            )
            : null
            }
        </div>
        <UsrInfo />
        <div className="main-article">
          {this.renderArticleHandler()}
        </div>
      </div>
    );
  }
}

MainArticle.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  fetchOneArticles: PropTypes.func.isRequired,
  mainArticle: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({ mainArticle: state.completeArticle });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchOneArticles: fetchArticles },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainArticle);
