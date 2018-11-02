import React from 'react';
import { shallow } from 'enzyme';
import FollowUnfollow from '.';
import Followers from './followers';
import store from '../../store/store';

describe('<FollowUnfollow />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <FollowUnfollow username="someUsername" following store={store} />,
    );
    expect(wrapper.find('.btn-following')).toBeDefined();
  });
});

describe('<Followers />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <Followers store={store} />,
    );
    expect(wrapper.find('.followers')).toBeDefined();
  });
});
