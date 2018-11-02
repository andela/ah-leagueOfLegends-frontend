import { shallow } from 'enzyme';
import React from 'react';

import Loader from './index';

describe('<Loader />', () => {
  it('renders  <Loader /> components', () => {
    const snap = shallow(
      <Loader />);
    expect(snap).toMatchSnapshot();
  });
});
