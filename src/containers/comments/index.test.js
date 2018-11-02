import React from 'react';
import { mount, shallow } from 'enzyme';
import { Comments } from '.';

describe('<ReadArticle />', () => {
  const props = {
    allComments: jest.fn(),
    newComment: jest.fn(),
    slug: 'new comment',
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <Comments {...props} />,
    );
    expect(wrapper.find('.new-comments').exists()).toBe(true);
  });
  it('renders updates state of comments', () => {
    const spy = jest.spyOn(Comments.prototype, 'publishCommentHandler');
    const wrapper = mount(
      <Comments {...props} />,
    );
    const publishButton = wrapper.find('.comment-publish-btn');
    publishButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
