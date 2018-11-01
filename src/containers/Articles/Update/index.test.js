import React from 'react';
import { shallow } from 'enzyme';
import UpdateArticle from './index';
import store from '../../../store/store';
import history from '../../../history';

describe('<LargeArticle />', () => {
  const props = {
    match: {},
    history,
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <UpdateArticle store={store} {...props} />,
    );
    expect(wrapper.find('.tag-list')).toBeDefined();
  });
});
