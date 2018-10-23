import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '.';
import store from '../../store/store';

describe('<Notifications />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <Notifications store={store} />,
    );
    expect(wrapper.find('.notification')).toBeDefined();
  });
});
