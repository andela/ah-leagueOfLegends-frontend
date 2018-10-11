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
    const { publishNewArticle } = this.props
    publishNewArticle();
  }

  render() {
    const { history } = this.props;
    console.log(this.props.newArticle)
    return (
      <div>
        <ArticleHeader />
        <div style={{ width: '70%', marginLeft: '20%', marginTop: '2%' }}>
          <div className="">
            <div className="author-info">
              <img
                className="avatar-small"
                src="https://api.adorable.io/avatars/285/abott@adorable.png"
                alt="User Profile Pic"
                style={{ marginTop: 10 }}
              />
              <div className="articale-time">
                <p>Gilbert Ngeywo</p>
                <div className="article-time--details" style={{ padding: 1 }}>
                  I Love Programming so much. Wanna be a world class Programmer
                  <br />
                  Draft
                </div>
              </div>
            </div>
          </div>
        </div>
        <Editor
          edtrState={EditorState}
          history={history}
          publishing = {this.props.publishing}
          postArticle = {this.props.newArticle}
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
