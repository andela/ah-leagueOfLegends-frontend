import { shallow } from 'enzyme';
import React from 'react';
import NotFound from './index';

describe('<NotFound />', () => {
  it('renders  <NotFound /> components', () => {
    const snap = shallow(
      <NotFound
        item=""
      />);
    expect(snap).toMatchSnapshot();
  });
});
