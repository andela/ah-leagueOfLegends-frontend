import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import {
  articleFectFailure, articleFectSuccsess, fetchArticle, fetchArticles,
} from './actions';
import * as types from './constant';
import articleTestData from '../../../utils/articleData';
import getActions from '../../../utils/getActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch single Article Actions', () => {
  const store = mockStore();
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    store.clearActions();
  });

  it('should fetch a single Articles', () => {
    const expectedAction = { type: types.FETCH_ARTICLE };
    expect(fetchArticle()).toEqual(expectedAction);
  });

  it('should return errors incase of failures', () => {
    const error = articleTestData.articleError;
    const expectedAction = {
      type: types.FETCH_FAILURE,
      error,
    };
    expect(articleFectFailure(error)).toEqual(expectedAction);
  });

  it('should return success if articles payload was received', () => {
    const payload = articleTestData.singleArticle;
    const expectedAction = {
      type: types.FETCH_SUCCESS,
      payload: payload.data.article.article,
    };
    expect(articleFectSuccsess(payload)).toEqual(expectedAction);
  });
  it('should dispatch fetch action', async () => {
    store.dispatch(fetchArticles());
    expect(await getActions(store, types.FETCH_ARTICLE)).toEqual({ type: types.FETCH_ARTICLE });
  });
  it('should dispatch success fetchArction action', async () => {
    store.dispatch(articleFectSuccsess(articleTestData.singleArticle));
    const payload = articleTestData.singleArticle.data.article.article;
    expect(await getActions(store, types.FETCH_SUCCESS))
      .toEqual({ payload, type: types.FETCH_SUCCESS });
  });
});
