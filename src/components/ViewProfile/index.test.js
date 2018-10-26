import { shallow } from 'enzyme';
import React from 'react';

import ViewProfiles from './index';

describe('<ViewProfile />', () => {
  it('renders  <ViewProfile /> components', () => {
    const snap = shallow(
      <ViewProfiles
        username=""
        image=""
        bio=""
        onEditClick={() => {}}
        avatarUpload={() => {}}
        loggedinUsername={() => {}}
        isAuthenticated=""
      />);
    expect(snap).toMatchSnapshot();
  });
});
