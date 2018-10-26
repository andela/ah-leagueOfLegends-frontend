import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import expect from 'expect';

import { LikeDislike } from './index';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);

const props = {
  like: 1,
  dislike: 2,
  mainArticle: {
    payload: {
      body: '',
      created_at_date: '',
      description: '',
      slug: '',
      title: '',
      updated_at_date: '',
      like: '',
      dislike: '',
      favorited: '',
      favoritesCount: '',
      average_ratings: '',
    },
  },
};

const store = mockStore({});

describe('<LikeDislike/>', () => {
  describe('render()', () => {
    test('renders the LikeDislike component', () => {
      const wrapper = mount(
        <Provider store={store}>
          <LikeDislike {...props} />
        </Provider>,
      );
      expect(wrapper.find('LikeDislike').exists()).toBe(true);
    });
  });
});
