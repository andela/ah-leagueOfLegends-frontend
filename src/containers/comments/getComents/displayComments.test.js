import React from 'react';
import { shallow } from 'enzyme';
import { DisplayComments } from './displayComments';

describe('<Aside />', () => {
  const props = {
    allComments: {},
    allComment: jest.fn(),
    manipulateComment: {},
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <DisplayComments {...props} />,
    );
    expect(wrapper.find('.display-comments').exists()).toBe(true);
  });
});
