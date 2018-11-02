import React from 'react';
import { shallow } from 'enzyme';
import { Aside } from './aside';

describe('<Aside />', () => {
  const props = {
    getAllArticles: jest.fn(),
    articles: [
      { author: 'wuantu', likes: 20 },
      { author: 'wuantu', likes: 20 },
    ],
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <Aside {...props} />,
    );
    expect(wrapper.find('.aside-article').exists()).toBe(true);
  });
});
