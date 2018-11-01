import React from 'react';
import { shallow } from 'enzyme';
import LargeArticle from './largArticle';
import store from '../../../store/store';
import history from '../../../history';

describe('<LargeArticle />', () => {
  const props = {
    match: {},
    history,
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <LargeArticle store={store} {...props} />,
    );
    expect(wrapper.find('.tag-list')).toBeDefined();
  });
});
