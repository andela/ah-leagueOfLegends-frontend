import configureStore from 'redux-mock-store';

import * as NotificationActions from './action';

const mockStore = configureStore();
const store = mockStore();

describe('notificationActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('notificationSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { type: 'FETCH_NOTIFICATIONS_SUCCESSFUL' },
      ];
      store.dispatch(NotificationActions.notificationSuccess());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('notificationFailiure', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { error: undefined, type: 'FETCH_NOTIFICATIONS_FAILED' },
      ];
      store.dispatch(NotificationActions.notificationFailiure());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('readnotificationSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { payload: undefined, type: 'NOTIFICATION_READ' },
      ];
      store.dispatch(NotificationActions.readNotificationSuccess());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
