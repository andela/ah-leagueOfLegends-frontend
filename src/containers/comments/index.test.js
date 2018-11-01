import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Comments } from '.';
import articleData from '../../utils/articleData';

import rootReducer from '../../store/rootReducer';

const Store = createStore(rootReducer, applyMiddleware(thunk));

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
