import React, { Component } from 'react';
import Dante from 'Dante2';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import { BACKEND_URL } from '../../utils/config';
import UserInfo from '../Header/UserInfo';

export default class Editor extends Component {
  state = {
    tags: [],
    editorState: null,
    article: {},
  }

  componentDidMount() {
    this.setStateHandler();
  }
  // eslint-disable-next-line
  static getDerivedStateFromProps(props, state) {
    const propsNewTags = props.tags ? props.tags.filter(tag => state.tags.includes(tag)) : [];
    if (!props.tags) {
      return {
        ...state,
        tags: [...state.tags],
        editorState: props.state,
      };
    }
    return {
      ...state,
      tags: propsNewTags.length === 0 ? props.tags : [...propsNewTags, ...state.tags],
      editorState: props.state,
    };
  }

  setStateHandler = () => {
    // eslint-disable-next-line
    this.setState({ article: { ...this.state.article, body: this.props.edtrState, tags:[] } });
  }

  getTags = (_e, d) => {
    // eslint-disable-next-line
    this.setState({ tags: [...this.state.tags, d.childNodes[0].nodeValue] });
  };

  removeTag = (_e, d) => {
    // eslint-disable-next-line
    this.setState({ tags: this.state.tags.filter(tag => tag !== d.childNodes[0].nodeValue) });
  };


  handleSave = (state) => {
    this.setState({ saving: true });
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    let data;
    if (state.editorContent.blocks.length === 1 && state.editorContent.blocks[0].text === '') {
      // eslint-disable-next-line
      const { editorState } = this.state;
      data = {
        article: {
          body: JSON.stringify(editorState),
          title,
          description: title,
          // eslint-disable-next-line
          tagList: this.state.tags,
        },
      };
      localStorage.setItem('article', JSON.stringify(data));
      this.setState({ saving: false });
      return;
    }
    data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title,
        // eslint-disable-next-line
        tagList: this.state.tags,
      },
    };

    localStorage.setItem('article', JSON.stringify(data));
    this.setState({ saving: false });
  };

  publishArticleHandler = () => {
    const { tags } = this.state;
    const { postArticle, history } = this.props;
    const article = JSON.parse(localStorage.getItem('article'));
    article.article.tagList = tags;
    postArticle(article, history);
  }

  render() {
    const titl = <div style={{ fontSize: 50, fontWeight: 'bold' }}>Enter Title</div>;
    const { edtrState } = this.props;
    const token = localStorage.getItem('access_token');
    return (
      <div>
        <UserInfo
          /* eslint-disable-next-line */
          tagsValue={this.state.tags}
          getTags={this.getTags}
          /* eslint-disable-next-line */
          tags={this.state.tags}
          removeTag={this.removeTag}
          publishHandler={this.publishArticleHandler}
        />
        <div className="draft-editor">
          <Dante
            body_placeholder={titl}
            content={edtrState}
            spellcheck
            data_storage={{
              url: `${BACKEND_URL}api/articles`,
              method: 'POST',
              save_handler: this.handleSave,
              interval: 100,
              withCredantials: true,
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }}
          />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  edtrState: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  postArticle: PropTypes.func.isRequired,
};