import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';
import store from '../../../store/store';

// in app/src/setupTests.js file
const Enzyme = require('enzyme');
// this is where we reference the adapter package we installed
// earlier
const EnzymeAdapter = require('enzyme-adapter-react-16');
// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

// describe what we are testing
describe('Register Component', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(
      shallow(<Register store={store} />)
        .find('form.register')
        .exists(),
    ).toBe(true);
  });

  it('renders a email input', () => {
    expect(
      shallow(<Register store={store} />)
        .find('#email')
        .length.toEqual(1),
    );
  });
  it('renders a password input', () => {
    expect(shallow(<Register store={store} />).find('#password').length).toEqual(1);
  });

  describe('Email input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<Register store={store} />);
      wrapper
        .find('#email')
        .simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });

      expect(wrapper.state('email')).toEqual('blah@gmail.com');
    });
  });

  describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<Register store={store} />);
      wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'cats' } });

      expect(wrapper.state('password')).toEqual('cats');
    });
  });
});
