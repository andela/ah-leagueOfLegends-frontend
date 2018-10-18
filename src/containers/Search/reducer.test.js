import searchReducer from './reducer';

describe('search_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('initial_state_is_correct', () => {
      const action = { type: 'WRONG ACTION' };
      const initialState = { articles: '', keyword: '' };

      expect(searchReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('SEARCH_SUCCESS', () => {
    test('returns correct state', () => {
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
      const action = { type: 'SEARCH_SUCCESSFULL', payload };
      const expectedState = { articles: payload, keyword: undefined };

      expect(searchReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('SEARCH_FAILURE', () => {
    test('returns correct state', () => {
      const error = 'The search was not successful';
      const action = { type: 'SEARCH_FAILED', error };
      const expectedState = { articles: '', keyword: '' };

      expect(searchReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
