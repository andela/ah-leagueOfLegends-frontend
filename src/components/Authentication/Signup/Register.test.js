import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Register from './Register';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = { registerNewUser: jest.fn() };

describe('Article Rating Component', () => {
  const wrapper = shallow(<Register store={store} {...props} />).dive();
  test('Render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Renders register form', () => {
    expect(wrapper.find('form')).toBeDefined();
  });
  test('Renders register form', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });
});
