import React from 'react';
import { shallow } from 'enzyme';
import ReadArticle from '.';
import store from '../../../store/store';
import Aside from './aside';

describe('<ReadArticle />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <ReadArticle store={store} />,
    );
    expect(wrapper.find('.article-landing-page')).toBeDefined();
  });
  it('Renders aside without crashing', () => {
    const wrapper = shallow(<Aside store={store} />);
    expect(wrapper.find('.asideArticle')).toBeDefined();
  });
});
