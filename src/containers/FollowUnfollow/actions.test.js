import configureStore from 'redux-mock-store';

import * as FollowActions from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('followActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('followSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { type: 'FOLLOW_SUCCESSFUL' },
      ];
      store.dispatch(FollowActions.followSuccess());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('followFailiure', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { payload: undefined, type: 'FOLLOW_UNSUCCESSFUL' },
      ];
      store.dispatch(FollowActions.followFailiure());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getfollowersSucess', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { payload: undefined, type: 'GET_FOLLOWERS_SUCCESSFUL' },
      ];
      store.dispatch(FollowActions.getfollowersSucess());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getfollowFailiure', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { payload: undefined, type: 'GET_USERS_UNSUCCESFUL' },
      ];
      store.dispatch(FollowActions.getfollowFailiure());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getfollowFailiure', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        { payload: undefined, type: 'GET_USERS_UNSUCCESFUL' },
      ];
      store.dispatch(FollowActions.getfollowFailiure());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
