import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './userInfo';
import store from '../../../store/store';

describe('Editor state', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      viewProfileReducer: {},
      username: {},
      fetchUserDetails: jest.fn(),
    };
    wrapper = shallow(
      <UserInfo store={store} {...props} />,
    );
  });

  it('should render Editor component', () => {
    expect(wrapper.find('.author-info')).toBeDefined();
  });
});
