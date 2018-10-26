import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import {
  articleFetch, articleSuccess, articleFailure, getArticles,
} from './actions';
import * as types from './constants';
import articleTestData from '../../../utils/articleData';
import getActions from '../../../utils/getActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Read Actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should fetch Articles', () => {
    const expectedAction = { type: types.GET_ARTICLES };
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
  it('should dispatch fetch action', async () => {
    const store = mockStore();
    store.dispatch(getArticles());
    expect(await getActions(store, types.GET_ARTICLES)).toEqual({ type: types.GET_ARTICLES });
  });
});
