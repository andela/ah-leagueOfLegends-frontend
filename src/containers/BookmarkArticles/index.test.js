import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BookmarkArticles } from './index';
import BookmarkArticle from '../../components/BookmarkArticle/index';
import store from '../../store/store';

const props = {
  bookmark: '',

  mainArticle: {
    payload: {
      body: '',
      created_at_date: '',
      description: '',
      slug: '',
      title: '',
      updated_at_date: '',
      like: '',
      dislike: '',
      favorited: '',
      favoritesCount: '',
      average_ratings: '',
    },
  },
};

describe('<VBookmarkArticles  />', () => {
  const profileWrapper = mount(
    <MemoryRouter initialEntries={['/bookmark']}>
      <Provider store={store}>
        <BookmarkArticles
          {...props}
        />
      </Provider>
    </MemoryRouter>,
  );
    // if it renders the component
  it('should render <BookmarkArticle/> component', () => {
    expect(profileWrapper.find(BookmarkArticle).length).toEqual(1);
  });
});
