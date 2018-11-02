
import fetchMock from 'fetch-mock';

import { commentFailure, commentSuccess, commentFetch } from './actions';
import * as types from './constant';
import articleTestData from '../../../utils/articleData';

describe('Read Actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should fetch Comments', () => {
    const expectedAction = { type: types.FETCH_COMMENT };
    expect(commentFetch()).toEqual(expectedAction);
  });

  it('should return errors incase of failures', () => {
    const error = articleTestData.commentError;
    const expectedAction = {
      type: types.FETCH_COMMENT_FAIL,
      error,
    };
    expect(commentFailure(error)).toEqual(expectedAction);
  });

  it('should return success if comments payload was received', () => {
    const payload = articleTestData.comments;
    const expectedAction = {
      type: types.FETCH_COMMENT_SUCCSESS,
      payload,
    };
    expect(commentSuccess(payload)).toEqual(expectedAction);
  });
});
