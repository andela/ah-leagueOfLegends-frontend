import configureStore from 'redux-mock-store';

import * as SearchActions from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('searchActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('searchSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const payload = {
        articles: [
          {
            author: 'leatherface', body: "there's no cure", tagList: Array(2), created_at_date: '2018-10-17T19:25:29.943701+00:00', description: 'Do you feel lost',
          },
          {
            author: 'Takeda', body: 'It takes a village', tagList: Array(2), created_at_date: '2018-10-17T14:44:10.824544+00:00', description: 'Be happy',
          },
        ],
      };
      const expectedActions = [
        {
          type: 'SEARCH_SUCCESSFULL',
          payload,
        },
      ];
      store.dispatch(SearchActions.searchSuccess(payload));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('loginFailure', () => {
    test('dispatches the correct action and payload', () => {
      const error = 'Search was not successful';
      const expectedActions = [
        {
          type: 'SEARCH_FAILED',
          error,
        },
      ];
      store.dispatch(SearchActions.SearchFailure(error));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
