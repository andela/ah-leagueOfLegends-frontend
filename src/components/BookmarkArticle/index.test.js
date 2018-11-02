import { shallow } from 'enzyme';
import React from 'react';

import BookmarkArticles from './index';

describe('<BookmarkArticles />', () => {
  it('renders  <BookmarkArticles /> components', () => {
    const snap = shallow(
      <BookmarkArticles
        disabled=""
        onBookmarkClick={() => {}}
        bookmark=""

      />);
    expect(snap).toMatchSnapshot();
  });
});
