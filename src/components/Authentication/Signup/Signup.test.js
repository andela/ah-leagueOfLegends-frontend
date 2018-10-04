import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from "enzyme/build";
Enzyme.configure({ adapter: new Adapter() });

//signup
describe('Signup', () => {
    it('redirects after signup', () => {

    });
});
//signup form
describe('<SignupForm />', () => {
    it('render signup form without crashing', () => {

    });
    it('renders error fields ', () => {

    });
    it('renders input fields and a button', () => {

    });
});
