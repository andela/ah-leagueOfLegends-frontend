import { shallow } from 'enzyme';
import React from 'react';

import Bookmarks from './bookmarks';

describe('<Bookmarks />', () => {
  it('renders  <Bookmarks /> components', () => {
    const snap = shallow(
      <Bookmarks
        bookmarkList={[]}

      />);
    expect(snap).toMatchSnapshot();
  });
});
