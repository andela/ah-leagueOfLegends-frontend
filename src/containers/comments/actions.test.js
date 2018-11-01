import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import MockAdapter from 'axios-mock-adapter';

import {
  commentFailure, commentSuccess, commentFetch, publishComment,
} from './actions';
import * as types from './constants';
import articleTestData from '../../utils/articleData';
import { BACKEND_URL } from '../../utils/config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Create Comment Actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should be able to create comments', () => {
    const expectedAction = { type: types.COMMENT_FETCH };
    expect(commentFetch()).toEqual(expectedAction);
  });

  it('should return errors incase of failures', () => {
    const error = articleTestData.commentError;
    const expectedAction = {
      type: types.COMMENT_FAILURE,
      error,
    };
    expect(commentFailure(error)).toEqual(expectedAction);
  });

  it('should return success if articles payload was received', () => {
    const payload = articleTestData.comments;
    const expectedAction = {
      type: types.COMMENT_SUCCESS,
      payload,
    };
    expect(commentSuccess(payload)).toEqual(expectedAction);
  });
  it('should dispatch post action', async () => {
    const MAIN_URL = `${BACKEND_URL}api/articles`;
    mock.onPost(MAIN_URL).reply(201, articleTestData.comments);
    const store = mockStore();
    await store.dispatch(publishComment(articleTestData.comments, '', false, ''));
    const [dispatchedAction] = store.getActions();
    expect(dispatchedAction)
      .toEqual({ type: types.COMMENT_FETCH });
  });
});
