import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  rateArticle, currentRate, currentAVG, ratingError,
} from './actions/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Register actions', () => {
  const store = mockStore({});
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());

  const data = { stars: 4 };
  const response = {
    RateData: data,
    status: 'success',
  };
  describe('Rating action', () => {
    it('Should dispatch rate article action', async (done) => {
      moxios.stubRequest('http://127.0.0.1:8000/api/articles/slug/rate/', {
        status: 200,
        response: data,
      });
      const returnedAction = [];

      await store.dispatch(rateArticle({ ...response.RateData }));
      expect(store.getActions()).toEqual(returnedAction);
      done();
    });
  });

  it('Should dispatch currentRate to return user initial rate', async (done) => {
    moxios.stubRequest('http://127.0.0.1:8000/api/articles/slug/rate/', {
      status: 200,
      response: data,
    });
    const returnedAction = [{ payload: { userRating: { stars: 4 } }, type: 'CURRENT_RATE' }];

    await store.dispatch(currentRate({ ...response.RateData }));
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });

  describe('dispatches average rating', () => {
    test('dispatches correct action and payload', () => {
      const rate = 4;
      const expectedAction = [{ payload: { average_rating: 4 }, type: 'CURRENT_AVG' }];
      store.dispatch(currentAVG(rate));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  describe('dispatches average rating', () => {
    test('dispatches correct action and payload', () => {
      const err = 'You cannot rate your own article';
      const expectedAction = [
        { payload: 'You cannot rate your own article', type: 'RATING_FAILURE' },
      ];
      store.dispatch(ratingError(err));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
