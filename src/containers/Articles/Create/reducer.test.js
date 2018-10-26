import * as actions from './actions';
import publishArticleReducer from './reducer';

const initialState = {
  payload: {},
  publishing: false,
  success: false,
  failure: false,
  error: undefined,
};

describe('Test for New Article Create Reducer', () => {
  it('should should set publish to true on successful publishing', () => {
    const action = actions.articleFetch();
    const newState = publishArticleReducer(initialState, action);
    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.publishing).toBe(true);
  });
  it('should set success True when article is published successfully', () => {
    const payload = {
      data: {
        articles: {
          title: 'Article DAta',
          body: 'Article Body',
          description: 'Article Description',
        },
      },
    };
    const action = actions.articleSuccess(payload);

    const newState = publishArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.success).toBe(true);
  });
  it('should set failed to true incase of failure', () => {
    const errors = { errors: { error: ['Article not found'] } };
    const action = actions.articleFailure(errors);

    const newState = publishArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.failure).toBe(true);
  });
});
