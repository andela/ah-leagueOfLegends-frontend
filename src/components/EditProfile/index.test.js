import { shallow } from 'enzyme';
import React from 'react';
import EditProfile from './index';

describe('<EditProfile />', () => {
  it('renders  <EditProfile /> components', () => {
    const snap = shallow(
      <EditProfile
        username=""
        image=""
        bio=""
        onChange={() => {}}
        onCancel={() => {}}
        onSave={() => {}}
        validateForm={() => {}}
      />);
    expect(snap).toMatchSnapshot();
  });
});
