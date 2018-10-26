import React, { Component } from 'react';
// eslint-disable-next-line
import '../../styles/scss/components/_likeDislikeArticles.scss';

class LikeDislikeComments extends Component {
  render() {
    return (
      <div>
        <button
          className="btn-thumb-up"
          type="submit"
          onClick={() => this.handleLikeDislike(true)}
        >
          <i className="material-icons" id="like">thumb_up</i>
        </button>
        <button
          type="submit"
          className="btn-thumb-down"
          onClick={() => this.handleLikeDislike(false)}
        >
          <i className="material-icons" id="dislike">thumb_down</i>
        </button>
      </div>
    );
  }
}


export default LikeDislikeComments;
