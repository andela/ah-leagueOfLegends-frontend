import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { forgotPasswordAction } from './actions';

export const LINK_REQUEST = 'LINK_REQUEST';
export const LINK_SUCCESS = 'LINK_SUCCESS';
export const LINK_FAILURE = 'LINK_FAILURE';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('ForgotPassword Action tests', () => {
  const mock = new MockAdapter(axios);
  const url = 'https://ah-leagueoflegends-staging.herokuapp.com/api/users/forgot_password/';

  store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch LINK_SUCCESS when done fetching users', () => {
    mock.onPost(url).reply(200, 'SUCCESS');
    return store.dispatch(forgotPasswordAction({ email: 'teddyantony@gmail.com' })).then(() => {
      expect(store.getActions()).toContainEqual({ type: LINK_SUCCESS, payload: 'SUCCESS' });
    });
  });

  it('should dispatch LINK_FAILURE when linkFailure is called successfully', () => {
    mock.onPost(url).reply(500);
    return store.dispatch(forgotPasswordAction()).then(() => {
      expect(store.getActions()).toContainEqual({ type: LINK_FAILURE, errors: 'oops! something went wrong :(' });
    });
  });
});
