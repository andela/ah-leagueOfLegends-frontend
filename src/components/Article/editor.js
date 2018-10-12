import React, { Component } from 'react';
import Dante from 'Dante2';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import { BACKEND_URL } from '../../utils/config';
import UserInfo from '../../containers/Articles/Create/userInfo';

export default class Editor extends Component {
  state = {
    saving: false,
    tags: [],
    editorState: null,
    article: {},
  }

  componentDidMount() {
    this.setState({
      article: {
        ...this.state.article,
        body: this.props.edtrState,
      },
    });
  }

  handleSave = (state) => {
    this.setState({ saving: true });
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    let data;
    if (state.editorContent.blocks.length === 1 && state.editorContent.blocks[0].text === '') {
      data = {
        article: {
          body: JSON.stringify(this.state.editorState),
          title,
          description: title,
          tagList: this.state.tags,
        },
      };
      console.log(data)
      localStorage.setItem('article', JSON.stringify(data));
      this.setState({ saving: false });
      return;
    }
    data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title,
        tagList: this.state.tags,
      },
    };

    localStorage.setItem('article', JSON.stringify(data));
    this.setState({ saving: false });
  };

  publishArticleHandler = () => {
    const { postArticle, history } = this.props;
    const article = JSON.parse(localStorage.getItem('article'));
    console.log('@@@@@@@@',article)
    postArticle(article, history);
  }

  render() {
    const titl = <div style={{ fontSize: 50, fontWeight: 'bold' }}>Enter Title</div>;
    const { edtrState } = this.props;
          const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNTQxNzUzNjc0fQ.aP0y7XZbbq5wVp-SqWmpx3n4wERppmqCCCCQYqQB5uI';
        
    return (
      <div>
        <UserInfo 
          publishHandler = { this.publishArticleHandler }
        />
        <div className="draft-editor" >
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
            'Authorization': 'Bearer '+token
            }
            }}
          />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  edtrState: PropTypes.instanceOf(Object).isRequired,
}
