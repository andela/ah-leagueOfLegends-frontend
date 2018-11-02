import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { getComments as getComents } from './actions';
import { publishComment } from '../actions';
import CommentsComponent from './comments';

export class DisplayComments extends PureComponent {
  state={
    show: null,
    editComment: false,
    componentIndex: null,
  };

  componentDidMount() {
    const { allComment, articleSlug } = this.props;
    if (articleSlug !== undefined) {
      allComment(articleSlug);
    }
  }

  onClickeditCommentHandler(editComment, index) {
    this.setState({
      editComment: true,
      componentIndex: index,
    });
  }

  handleMouseEnter(index) {
    const { show } = this.state;
    // eslint-disable-next-line
    if (parseInt(document.getElementById(index).id) === parseInt(index)) {
      if (typeof show === 'number' && show !== index) {
        const div = document.getElementById(show);
        if (div) {
          div.classList.remove('anotherclass');
        }
      }
      const div = document.getElementById(index);
      this.setState({ show: index });
      div.classList.toggle('anotherclass');
      // eslint-disable-next-line
    }
  }

  deleteCommentHandler(commentId, articleSlug) {
    const { manipulateComment, allComment } = this.props;
    manipulateComment('', articleSlug, 'DELETE', true, commentId);
    allComment(articleSlug);
  }


  render() {
    const { allComments, articleSlug } = this.props;
    const { editComment, componentIndex } = this.state;
    const user = localStorage.getItem('user');
    let allComents;
    if (allComments.success && allComments) {
      try {
        allComents = allComments.payload.data.comments.map((comment, index) => (
          <div key={comment.id} className="comment-list cards hoverable">
            {/* eslint-disable */}
            {
              (user === comment.author.username)
                ? (
                  <i
                    role="button"
                    className="small material-icons more-comments-icon dropdown-trigger"
                    onClick={() => this.handleMouseEnter(index)}
                  >
              expand_more
                  </i>)
                : null
            }

            <ul className="comment-dropdown" id={index}>
              <button
                type="submit"
                id="cmt-edit"
                className="hoverable"
                style={{ width: '100px' }}
                onClick={() => this.onClickeditCommentHandler(editComment, index)}
              >
                <i className="tiny material-icons">edit</i>
                  Edit
              </button>
              <button type="submit" className="hoverable" onClick={() => this.deleteCommentHandler(comment.id, articleSlug)} style={{ width: '100px' }}>
                <i className="tiny material-icons">delete</i>
                    Delete
              </button>

            </ul>
            <div className="card-content author-info">
              <img
                className="avatar-small"
                alt="User Profile"
                style={{ marginTop: 15 }}
                src={comment.author.image}
              />
              <div className="articale-time">
                <p>
                  <a href="/">{comment.author.username}</a>
                </p>
                <div className="article-time--details">
                  <Moment format="(YYYY/MM/DD) -HH:MM:SS">{comment.created_at}</Moment>
                </div>
              </div>
            </div>
            <CommentsComponent
              clicked={editComment}
              componentIndex={componentIndex}
              slug={articleSlug}
              index={index}
              comments={comment}
            />
            <div id={`comment-list${index}`} />
          </div>
        ));
      } catch (e) {
        return null;
      }
    }
    return (
      <div className="display-comments">
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
  manipulateComment: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({ allComments: state.getAllComment });

const mapDispatchToProps = dispatch => bindActionCreators({
  allComment: getComents,
  manipulateComment: publishComment,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComments);
