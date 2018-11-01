import * as actions from './actions';
import getArticleReducer from './reducer';
import testArticles from '../../../utils/articleData';

const initialState = {
  payload: [],
  loading: false,
  success: false,
  failed: false,
};

describe('Test for Article Read Reducer', () => {
  it('should should set loading true when getting articles', () => {
    const action = actions.fetchArticle();
    const newState = getArticleReducer(initialState, action);
    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.loading).toBe(true);
  });
  it('should set success True when successfully received payload', () => {
    const action = actions.articleFectSuccsess(testArticles.singleArticle);

    const newState = getArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.success).toBe(true);
  });
  it('should set failed to true incase of failure', () => {
    const errors = { errors: { error: ['Article not found'] } };
    const action = actions.articleFectFailure(errors);

    const newState = getArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.failed).toBe(true);
  });
});
