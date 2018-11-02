import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import expect from 'expect';

import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);

const props = {
  email: '',
  password: '',
  submitted: false,
  state: { Login: '' },
};

const store = mockStore({});

describe('<Login/>', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = mount(
        <Provider store={store}>
          <Login {...props} />
        </Provider>,
      );
      expect(wrapper.find('Login').exists()).toBe(true);
    });
  });
});
