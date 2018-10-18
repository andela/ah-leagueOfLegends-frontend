import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rateArticle, currentRate } from './actions/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Register actions', () => {
  beforeEach(() => moxios.install());
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

      const store = mockStore({});
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

    const store = mockStore({});
    await store.dispatch(currentRate({ ...response.RateData }));
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });
});
