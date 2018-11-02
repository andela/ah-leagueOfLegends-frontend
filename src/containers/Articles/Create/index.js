import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EditorState from './editorState';
import Editor from '../../../components/Article/editor';
import { publishArticle as newArticle } from './actions';

class CreateArticle extends Component {
  componentDidMount() {
  }

  render() {
    const { history, publishing, publishNewArticle } = this.props;
    return (
      <div className="editor">
        <Editor
          edtrState={EditorState}
          history={history}
          publishing={publishing}
          postArticle={publishNewArticle}
        />

      </div>
    );
  }
}

CreateArticle.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  publishing: PropTypes.bool.isRequired,
  publishNewArticle: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  newArticle: state.newArticle.payload,
  publishing: state.newArticle.publishing,
});

const mapDispatchToProps = dispatch => bindActionCreators({ publishNewArticle: newArticle },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
