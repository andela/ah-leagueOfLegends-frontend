import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ReadArticle } from '.';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('<ReadArticle />', () => {
  const props = {
    articles: [
      { author: 'quabt', bookmarked: true },
      { author: 'quantum', bookmarked: true },
    ],
    history: '',
    getAllArticles: jest.fn(),
  };
  it('renders without crushing', () => {
    const wrapper = shallow(
      <ReadArticle store={store} {...props} />,
    );
    expect(wrapper.find('.article-landing-page')).toBeDefined();
  });
});
