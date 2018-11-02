import React from 'react';
import { shallow } from 'enzyme';
import { CommentsComponent } from './comments';

describe('<Aside />', () => {
  const props = {
    comments: { body: 'hellow' },
    allComment: jest.fn(),
    manipulateComment: {},
    clicked: false,
    index: 2,
    slug: 'this is slug',
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <CommentsComponent {...props} />,
    );
    expect(wrapper.find('.comment-component').exists()).toBe(true);
  });
});
