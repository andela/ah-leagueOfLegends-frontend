import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ViewProfile } from './index';
import ViewProfiles from '../../../components/ViewProfile/index';
import store from '../../../store/store';

const props = {
  viewProfileReducer: {
    payload: {
      profile: {
        username: '',
        bio: '',
        image: '',
      },
    },
  },
  fetchUserDetails: jest.fn(),
  history: {},
};

describe('<ViewProfile />', () => {
  const profileWrapper = mount(
    <MemoryRouter initialEntries={['/profile/Takeda']}>
      <Provider store={store}>
        <ViewProfile
          match={{
            params: { username: 'Takeda' },
            isExact: true,
          }}

          {...props}
        />
      </Provider>
    </MemoryRouter>,
  );
  // if it renders the component
  it('should render <ViewProfiles /> component', () => {
    expect(profileWrapper.find(ViewProfiles).length).toEqual(1);
  });
});
