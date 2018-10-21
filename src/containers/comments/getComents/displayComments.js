import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import getComents from './actions';
import publishComment from '../actions';
import CommentsComponent from './comments';

class DisplayComments extends PureComponent {
  state={ show: null };

  componentDidMount() {
    const { allComment, articleSlug } = this.props;
    if (articleSlug !== undefined) {
      allComment(articleSlug);
    }
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

  editCommentHandler(index, display, commentId, articleSlug) {
    const { manipulateComment, allComment } = this.props;
    // eslint-disable-next-line
    if (parseInt(document.getElementById(index).id) === parseInt(index)) {
      const div = document.createElement('div');
      div.className = 'foo';
      div.id = index;
      // eslint-disable-next-line
      if (parseInt(div.id) === display) {
        const div1 = document.getElementById(`comment-list${index}`);
        div.classList.toggle('anotherclass');
        div1.innerHTML += `
        <div class="row" id="modal-edit">
          <form class="col s12">
          <i class="material-icons close-edit" onClick='{((document.getElementById("modal-edit").style.display="none") && ${allComment(this.articleSlug)} )}'>close</i>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Update comment</label>
              </div>
            </div>
          </form>
        </div>
        `;
        // window.location.reload();
        allComment(articleSlug);
      }
      allComment(articleSlug);
    }
  }

  close() {
    console.log("hello world.")
  }

  deleteCommentHandler(commentId, articleSlug) {
    const { manipulateComment, allComment } = this.props;
    manipulateComment('', articleSlug, 'DELETE', true, commentId);
    allComment(articleSlug);
  }


  render() {
    const { allComments, articleSlug } = this.props;
    const { show } = this.state;
    let allComents;
    if (allComments.success && allComments) {
      try {
        allComents = allComments.payload.data.comments.map((comment, index) => (
          <div key={comment.id} className="comment-list cards hoverable">
            {/* eslint-disable-next-line */}
            <i
              role="button"
              className="small material-icons more-comments-icon dropdown-trigger"
              onClick={() => this.handleMouseEnter(index)}
            >
              expand_more
            </i>

            <ul className="comment-dropdown" id={index}>
              <button type="submit" id="cmt-edit" className="hoverable" style={{ width: '100px' }} onClick={() => this.editCommentHandler(index, show, comment.id, articleSlug)}>
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
            <CommentsComponent comments={comment} />
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
