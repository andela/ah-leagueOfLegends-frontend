import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import M from 'materialize-css';
import { searchItem } from '../containers/Search/actions';
import Register from './Authentication/Signup/Register';
import Login from '../containers/Authentication/Login/Login';
import SocialLogin from './Authentication/Login/socialLogin/SocialLogin';
import Forgotpassword from '../containers/Forgotpassword';
import Notifications from '../containers/Notification';
import fetchUserDetails from '../../containers/Profile/ViewProfile/actions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.searchState = { searchText: '' };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    const { fetchUserDetails: fetchUser } = this.props;
    const { state } = this.props;
    const { isAuthenticated } = state;
    if (isAuthenticated) {
      const username = localStorage.getItem('user');
      fetchUser(username);
    }
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAuthenticated');
    window.location.reload(true);
  };

  handleprofileView() {
    const username = localStorage.getItem('user');
    window.location.replace(`/profile/${username}`);
  }


  handleSearch = () => {
    const { searchText } = this.state;
    const { search } = this.props;
    const filter = document.getElementById('search-filter').value;
    search(searchText, filter);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { state } = this.props;
    const { isAuthenticated } = state;
    const username = localStorage.getItem('user');
    const { viewProfileReducer } = this.props;
    const { profile } = viewProfileReducer.payload;
    const { image } = profile;
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="white z-depth-0">
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo black-text">Authors Haven</a>
                <ul className="right hide-on-med-and-down grey-text">
                  <li>
                    <form className="search">
                      {/* eslint-disable-next-line */}
                        <i className="material-icons" onClick={this.handleSearch}>search</i>
                      <input name="searchText" type="search" placeholder="search" onChange={this.handleChange} />
                      <div className="input-field col s12">
                        <select id="search-filter">
                          <option value="" disabled>Search By</option>
                          <option value="title">Title</option>
                          <option value="author__username">Author</option>
                          <option value="tagList">Tag</option>
                        </select>
                      </div>

                    </form>
                  </li>
                  {(isAuthenticated) ? (
                    <span>
                      <li><Notifications /></li>
                      <li><i className="material-icons">bookmark_border</i></li>
                      <li>
                        <button className="profile-button" onClick={this.handleprofileView} type="submit">
                          <img className="small-navbar-profile" src={image} alt={username} />
                        </button>
                      </li>
                      <li>
                        {' '}
                        <p className="navbar-username">
                        Welcome
                          {' '}
                          {' '}
                          {username}
                        </p>
                        {' '}
                      </li>
                      <button type="button" className="waves-effect waves-light btn white teal-text" onClick={this.logout}>
                          logout
                      </button>
                    </span>
                  ) : (
                    <span>
                      <li>
                        <a
                          className="waves-effect waves-light btn white teal-text
                                modal-trigger"
                          href="#modal-social"
                        >
                          Sign in
                        </a>

                      </li>
                      <li>
                        <button type="button" className="waves-effect waves-light btn white teal-text modal-trigger" href="#modal2">
                          Get started
                        </button>

                      </li>
                    </span>)}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Register />
        <Login />
        <SocialLogin />
        <Forgotpassword />
      </div>

    );
  }
}

Navbar.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  search: PropTypes.func.isRequired,
  viewProfileReducer: PropTypes.func.isRequired,
  fetchUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: state.Login,
  viewProfileReducer: state.viewProfileReducer,
});

const matchDispatchToProps = dispatch => bindActionCreators(
  { fetchUserDetails, search: searchItem }, dispatch);

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Navbar);
