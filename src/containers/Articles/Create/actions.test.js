import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import MockAdapter from 'axios-mock-adapter';

import {
  articleFetch, articleSuccess, articleFailure, publishArticle,
} from './actions';
import * as types from './constants';
import articleTestData from '../../../utils/articleData';
import { BACKEND_URL } from '../../../utils/config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Create Article Actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should be able to create Articles', () => {
    const expectedAction = { type: types.PUBLISH_ARTICLE };
    expect(articleFetch()).toEqual(expectedAction);
  });

  it('should return errors incase of failures', () => {
    const errors = articleTestData.articleError;
    const expectedAction = {
      type: types.ARTICLE_FAILURE,
      errors,
    };
    expect(articleFailure(errors)).toEqual(expectedAction);
  });

  it('should return success if articles payload was received', () => {
    const payload = articleTestData.article;
    const expectedAction = {
      type: types.ARTICLE_SUCCESS,
      payload,
    };
    expect(articleSuccess(payload)).toEqual(expectedAction);
  });
  it('should dispatch post action', async () => {
    const MAIN_URL = `${BACKEND_URL}api/articles`;
    mock.onPost(MAIN_URL).reply(201, articleTestData);
    const store = mockStore();
    await store.dispatch(publishArticle(articleTestData, '', false, ''));
    const [dispatchedAction] = store.getActions();
    expect(dispatchedAction)
      .toEqual({ type: types.PUBLISH_ARTICLE });
  });
  it('should dispatch put action', async () => {
    const MAIN_URL = `${BACKEND_URL}api/articles`;
    mock.onPost(MAIN_URL).reply(201, articleTestData);
    const store = mockStore();
    await store.dispatch(publishArticle(articleTestData, '', true, ''));
    const [dispatchedAction] = store.getActions();
    expect(dispatchedAction)
      .toEqual({ type: types.PUBLISH_ARTICLE });
  });
});
