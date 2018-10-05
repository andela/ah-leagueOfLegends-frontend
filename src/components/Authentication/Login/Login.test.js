import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme/build';

Enzyme.configure({ adapter: new Adapter() });

// logout
describe('Logout', () => {
  it('check local storage token does not exist', () => {

  });
  it('redirects after logout', () => {

  });
});
// login
describe('Login', () => {
  it('check local storage token exists', () => {

  });
  it('redirects after login', () => {

  });
});
// login form
describe('<LoginForm />', () => {
  it('render login form without crashing', () => {

  });
  it('renders error fields ', () => {

  });
  it('renders input fields of type button ', () => {
  });
});
