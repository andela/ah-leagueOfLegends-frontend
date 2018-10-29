import configureStore from 'redux-mock-store';

import * as toggleActions from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('searchActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('subscribeSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const payload = { message: 'You have successfully subscribed for notifications' };
      const expectedActions = [
        {
          type: 'SUBSCRIBE SUCCESSFUL',
          payload,
        },
      ];
      store.dispatch(toggleActions.subscribeSuccess(payload));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('UnsubscribeSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const payload = { message: 'You have successfully subscribed for notifications' };
      const expectedActions = [
        {
          type: 'UNSUBSCRIBE SUCCESSFUL',
          payload,
        },
      ];
      store.dispatch(toggleActions.unsubscribeSuccess(payload));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
