import React from 'react';
import { shallow } from 'enzyme';
import { UpdateArticle } from './index';
import store from '../../../store/store';
import history from '../../../history';

describe('<LargeArticle />', () => {
  const props = {
    fetchOneArticles: jest.fn(),
    match: { params: { s: 'hellow' } },
    mainArticle: { payload: {} },
    history,
    publishing: true,
    editArticle: jest.fn(),
    postArticle: jest.fn(),
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <UpdateArticle store={store} {...props} />,
    );
    expect(wrapper.find('.update-editor')).toBeDefined();
  });
});
