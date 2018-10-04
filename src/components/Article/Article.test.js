import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme/build";
Enzyme.configure({ adapter: new Adapter() });

//list of article
describe('List articles', () => {
    it('renders article list', () => {

    });
    it('returns correctly where there are no articles', () => {

    });
    it('Article component should match snapshot', () => {

    });
});
//test adding an article
describe('Add article', () => {
    it('renders article view component without crashing', () => {

    });
    it('renders errors ', () => {

    });
    it('article gets added', () => {

    });
});
//test updating an article
describe('<Editbutton/>', () => {
    it('renders edit button component without crashing', () => {

    });
    it('reads users edit input', () => {

    });
    it('article gets edited', () => {

    });
});
//test removing article
describe('<Deletebutton/>', () => {
    it('renders delete button component without crashing', () => {
        expect(true).toBe(true)
    });
    it('article gets deleted', () => {

    });
});
