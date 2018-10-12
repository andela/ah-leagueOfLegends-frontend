import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ImageBlockConfig } from 'Dante2/package/es/components/blocks/image';
import { VideoBlockConfig } from 'Dante2/package/es/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/es/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/es/components/blocks/placeholder';
import { CodeBlockConfig } from 'Dante2/package/es/components/blocks/code';

import EditorState from './editorState';
import Editor from '../../../components/Article/editor';
import ArticleHeader from '../../../components/Header/LogedInHeader';
import newArticle from './actions';

class CreateArticle extends Component {
  componentDidMount() {
  }

  render() {
    const { history, publishing, publishNewArticle } = this.props;
    return (
      <div>
        <ArticleHeader />
        <Editor
          edtrState={EditorState}
          history={history}
          publishing={publishing}
          postArticle={publishNewArticle}
          widgets={[
            ImageBlockConfig(),
            CodeBlockConfig(),
            EmbedBlockConfig(),
            VideoBlockConfig(),
            PlaceholderBlockConfig(),
          ]}
        />

      </div>
    );
  }
}

CreateArticle.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired }).isRequired,
};
const mapStateToProps = state => ({
  newArticle: state.newArticle.payload,
  publishing: state.newArticle.publishing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  publishNewArticle: newArticle,
}, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )(CreateArticle);
