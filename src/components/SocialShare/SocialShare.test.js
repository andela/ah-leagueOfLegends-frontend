import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import SocialShare from './SocialShare';

enzyme.configure({ adapter: new Adapter() });
const props = {
  href: 'www.google.com',
  className: 'fab fa-lg fa-twitter',
  title: 'Mutubadan',
  slug: 'mutuba-dan-wow',
};
// renders email button correctly
describe('Renders <SocialShare /> correctly ', () => {
  const wrapper = shallow(<SocialShare {...props} />);
  it('should render Eamil share link', () => {
    expect(wrapper.find('.email').length).toEqual(1);
  });
});
describe('Renders <SocialShare /> correctly ', () => {
  const wrapper = shallow(<SocialShare {...props} />);
  it('should render Facebook share link', () => {
    expect(wrapper.find('.fb').length).toEqual(1);
  });
});

describe('Renders <SocialShare /> correctly ', () => {
  const wrapper = shallow(<SocialShare {...props} />);
  it('should render Twitter  share link', () => {
    expect(wrapper.find('.twitter').length).toEqual(1);
  });
});

describe('Renders <SocialShare /> correctly ', () => {
  const wrapper = shallow(<SocialShare {...props} />);
  it('should render Whatsap share link', () => {
    expect(wrapper.find('.watsap').length).toEqual(1);
  });
});
describe('Renders <SocialShare /> correctly ', () => {
  const wrapper = shallow(<SocialShare {...props} />);
  it('should render Google plus share link', () => {
    expect(wrapper.find('.google').length).toEqual(1);
  });
});
