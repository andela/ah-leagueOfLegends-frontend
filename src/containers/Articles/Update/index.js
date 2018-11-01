import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArticles } from '../Article/actions';
import { publishArticle as newArticle } from '../Create/actions';
import Editor from '../../../components/Article/editor';

class UpdateArticle extends Component {
  componentDidMount() {
    const { fetchOneArticles, match } = this.props;
    fetchOneArticles(match.params.s);
  }

  editArticle = (article, history) => {
    const { editArticle, match } = this.props;
    editArticle(article, history, true, match.params.s);
  }

  render() {
    // eslint-disable-next-line
    const { payload, success } = this.props.mainArticle;
    const { publishing, history } = this.props;
    return (
      <div className="update-editor">
        { success
        && (
          <Editor
            edtrState={JSON.parse(payload.body)}
            history={history}
            postArticle={this.editArticle}
            publishing={publishing}
            update
          />
        )
        }
      </div>
    );
  }
}

UpdateArticle.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  publishing: PropTypes.bool.isRequired,
  mainArticle: PropTypes.instanceOf(Object).isRequired,
  editArticle: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  fetchOneArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  mainArticle: state.completeArticle,
  publishing: state.newArticle.publishing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchOneArticles: fetchArticles,
  editArticle: newArticle,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticle);
