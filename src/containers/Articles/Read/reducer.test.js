import * as actions from './actions';
import getArticleReducer from './reducer';

const initialState = {
  all_articles: [],
  loading: false,
  failed: false,
  success: false,
};

describe('Test for Article Read Reducer', () => {
  it('should should set loading true when getting articles', () => {
    const action = actions.articleFetch();
    const newState = getArticleReducer(initialState, action);
    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.loading).toBe(true);
  });
  it('should set success True when successfully received payload', () => {
    const payload = {
      data: {
        articles: {
          results: {
            title: 'Article DAta',
            body: 'Article Body',
            description: 'Article Description',
          },
        },
      },
    };
    const action = actions.articleSuccess(payload);

    const newState = getArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.success).toBe(true);
  });
  it('should set failed to true incase of failure', () => {
    const errors = { errors: { error: ['Article not found'] } };
    const action = actions.articleFailure(errors);

    const newState = getArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.failed).toBe(true);
  });
});
