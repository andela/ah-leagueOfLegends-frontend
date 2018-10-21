import notificationReducer from './reducer';

describe('notification_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('initial_state_is_correct', () => {
      const action = { type: 'WRONG ACTION' };
      const initialState = {
        error: '', message: false, notifications: [], success: false,
      };

      expect(notificationReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCH_NOTIFICATIONS_SUCCESSFUL', () => {
    test('returns correct state', () => {
      const notifications = { notification: [] };
      const action = { type: 'FETCH_NOTIFICATIONS_SUCCESSFUL', payload: notifications };
      const expectedState = {
        error: '', message: false, notifications: { notification: [] }, success: true,
      };

      expect(notificationReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_NOTIFICATIONS_FAILED', () => {
    test('returns correct state', () => {
      const error = { notification: { detail: 'Invalid token. Could not decode token. Possibly Damaged.' } };
      const action = { type: 'FETCH_NOTIFICATIONS_FAILED', payload: error };
      const expectedState = {
        error: undefined, message: false, notifications: [], success: false,
      };

      expect(notificationReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('NOTIFICATION_READ', () => {
    test('returns correct state', () => {
      const notifications = { notification: [] };
      const action = { type: 'NOTIFICATION_READ', payload: notifications };
      const expectedState = {
        error: '', message: true, notifications: [], success: false,
      };

      expect(notificationReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
