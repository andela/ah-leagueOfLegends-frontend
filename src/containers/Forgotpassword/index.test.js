import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Forgotpassword from './index';

let store;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const props = { payload: {}, forgotPasswordReducer: jest.fn() };


describe('Renders <Forgotpassword  /> correctly', () => {
  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });
  const wrapper = shallow(<Forgotpassword {...props} store={store} />).dive();
  it('renders input field', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders submit button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
  it('renders modal', () => {
    expect(wrapper.find('#modal3').exists()).toBe(true);
  });
  it('renders inner division', () => {
    expect(wrapper.find('.fpl').exists()).toBe(true);
  });
});
