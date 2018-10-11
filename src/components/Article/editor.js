import React, { Component } from 'react';
import Dante from 'Dante2';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import { BACKEND_URL } from '../../utils/config';

export default class Editor extends Component {
  state = {
    saving: false,
    editorState: null,
    article: {}
  }

  render() {
    const titl = <div style={{ fontSize: 50, fontWeight: 'bold' }}>Enter Title</div>;
    const { edtrState } = this.props;
    console.log(this.props)
          const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNTQxNzUzNjc0fQ.aP0y7XZbbq5wVp-SqWmpx3n4wERppmqCCCCQYqQB5uI';

    return (
      <div className="draft-editor">
        <Dante
          body_placeholder={titl}
          content={edtrState}
          spellcheck
          data_storage={{
          url: `${BACKEND_URL}api/articles`,
            method: 'POST',
            interval: 100,
            withCredantials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
          }}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  edtrState: PropTypes.instanceOf(Object).isRequired,
}
