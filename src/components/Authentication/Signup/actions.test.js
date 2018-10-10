import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { regSuccessful, regFailed } from './actions/actions';
import testData from './testData';
import { REG_SUCCESSFUL, REG_FAILED } from './actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Register actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const { user, errors } = testData;
  const url = 'http://127.0.0.1:8000/api/users/';
  it('should return action type and payload for signUpSuccess', async (done) => {
    moxios.stubRequest(url, {
      request: user,
      status: 201,
      response: {},
    });

    const returnedAction = [
      {
        payload: 'Please verify your email address to continue the registration.',
        type: REG_SUCCESSFUL,
      },
    ];

    const store = mockStore({});
    await store.dispatch(regSuccessful());
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });

  it('should return action type and payload for signUpFailure', async (done) => {
    moxios.stubRequest(url, {
      request: errors,
      status: 400,
      response: {},
    });

    const returnedAction = [
      {
        payload: {},
        type: REG_FAILED,
      },
    ];
    const store = mockStore({});
    await store.dispatch(regFailed());
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });
});
