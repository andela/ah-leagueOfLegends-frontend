import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import Success from './Success';

Enzyme.configure({ adapter: new Adapter() });

describe('Article Rating Component', () => {
  test('Render', () => {
    const wrapper = shallow(<Success />);
    expect(wrapper.exists()).toBe(true);
  });
});
