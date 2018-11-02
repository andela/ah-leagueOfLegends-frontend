import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import expect from 'expect';

import { SearchResults } from './index.';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);

const props = {
  articles: [
    {
      author: 'Nandaa',
      title: 'how to train your dragon',
      body: 'The dragon is just okay',
      slug: 'how-to-train-your-dragon',

    },
  ],
};

const store = mockStore({});

describe('<SearchResults/>', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = mount(
        <Provider store={store}>
          <SearchResults {...props} />
        </Provider>,
      );
      expect(wrapper.find('SearchResults').exists()).toBe(true);
    });
  });
});
