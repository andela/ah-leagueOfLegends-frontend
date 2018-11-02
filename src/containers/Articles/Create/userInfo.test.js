import React from 'react';
import { shallow } from 'enzyme';
// import store from '../../../store/store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UsrInfo } from './userInfo';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('Editor state', () => {
  const props = {
    fetchUserDetails: jest.fn(),
    username: 'quantum',
    viewProfileReducer: { loggedInUser: { profile: { image: 'hello' } } },
  };

  it('should render Editor component', () => {
    const wrapper = shallow(
      <UsrInfo store={store} {...props} />,
    );
    expect(wrapper.find('.author-info').exists()).toBe(true);
  });
});
