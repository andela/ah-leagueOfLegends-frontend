import React from 'react';
import { shallow } from 'enzyme';
import { articleComponent as ArticleComponent } from './articleComponents';

describe('<ArticleComponents />', () => {
  const props = {
    article: {
      author: { image: 'imga', email: 'mike' },
      slug: 'Hellow',
      created_at_date: 'December 17, 1995 03:24:00',
    },
    priview: 'Hellow',
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <ArticleComponent {...props} />,
    );
    expect(wrapper.find('.card-content').exists()).toBe(true);
    expect(wrapper.find('.article-default').exists()).toBe(true);
  });
});
