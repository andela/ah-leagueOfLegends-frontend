import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import getComents from './actions';
import CommentsComponent from './comments';

class DisplayComments extends Component {
  componentDidMount() {
    const { allComment, articleSlug } = this.props;
    if (articleSlug !== undefined) {
      allComment(articleSlug);
    }
  }

  render() {
    const { allComments } = this.props;
    let allComents;
      try{
        if (allComments.payload.data) {
          try {
            allComents = allComments.payload.data.comments.map(comment => (
              <CommentsComponent comments={comment} key={comment.id} />
              ));
            } catch (e) {
              console.log(e)
              }
            }
        }catch (e) {
          console.log(e)
      }
    return (
      <div className="display-comments">
        <div className="card-content author-info">
          <img
            className="avatar-small"
            alt="User Profile"
            style={{ marginTop: 15 }}
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
          />
          <div className="articale-time">
            <p>
              <a href="/">Gilbert Ngeywo</a>
            </p>
            <div className="article-time--details">
              Time Created
            </div>
          </div>
        </div>
        Hello world this was awsome Article. Quantum
        {allComents }
      </div>
    );
  }
}

DisplayComments.defaultProps = { articleSlug: '' };

DisplayComments.propTypes = {
  allComment: PropTypes.func.isRequired,
  articleSlug: PropTypes.string,
  allComments: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({ allComments: state.getAllComment });

const mapDispatchToProps = dispatch => bindActionCreators({ allComment: getComents },
  dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DisplayComments);
