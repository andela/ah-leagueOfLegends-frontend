import * as actions from './actions';
import getCommentReducer from './reducer';
import testComments from '../../utils/articleData';

const initialState = {
  payload: {},
  publishing: false,
  failure: false,
  success: false,
  error: undefined,
};

describe('Test for Comments Read Reducer', () => {
  it('should should set publishing true when getting comments', () => {
    const action = actions.commentFetch();
    const newState = getCommentReducer(initialState, action);
    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.publishing).toBe(true);
  });
  it('should set success True when successfully received payload', () => {
    const action = actions.commentSuccess(testComments);

    const newState = getCommentReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.success).toBe(true);
  });
  it('should set failed to true incase of failure', () => {
    const errors = { errors: { error: ['comments not found'] } };
    const action = actions.commentFailure(errors);

    const newState = getCommentReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.failure).toBe(true);
  });
});
