import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ArticleRating from './UserRating';
import Rating from './Rating';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  InitialRate: jest.fn(),
  rateArticle: jest.fn(),
  slug: 'just-a-dummy-slug',
  ratingReducer: jest.fn(),
};

describe('Article Rating Component', () => {
  test('Render', () => {
    const wrapper = shallow(<ArticleRating store={store} {...props} />).dive();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('StarRatings')).toBeDefined();
  });

  test('Render', () => {
    const wrapper = shallow(<Rating store={store} {...props} />).dive();
    console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('StarRatings')).toBeDefined();
  });
});
