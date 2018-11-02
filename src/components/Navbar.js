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
import fetchUserDetails from '../containers/Profile/ViewProfile/actions';
import { url } from '../utils/config';
import Notification from '../containers/Notification';

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.searchState = { searchText: '' };
  }

  componentDidMount() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    const el = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(el);
    const { fetchUserDets } = this.props;
    const { state } = this.props;
    const { isAuthenticated } = state;
    if (isAuthenticated) {
      const username = localStorage.getItem('user');
      fetchUserDets(username, 'loggedInUser');
    }
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAuthenticated');
    window.location.reload(true);
  };


  handleSearch = () => {
    const { searchText } = this.state;
    const { search } = this.props;
    const filter = document.getElementById('search-filter').value;
    search(searchText, filter);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleprofileView = () => {
    const username = localStorage.getItem('user');
    return `${url}profile/${username}`;
  }

  handleCreateNewArticle = () => `${url}article/new`

  render() {
    const { state } = this.props;
    const { isAuthenticated } = state;
    const username = localStorage.getItem('user');
    const { viewProfileReducer } = this.props;
    const { profile } = viewProfileReducer.loggedInUser;
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
                      <div className="input-field col s12">
                        <select id="search-filter">
                          <option value="" disabled>Search By</option>
                          <option value="title">Title</option>
                          <option value="author__username">Author</option>
                          <option value="tagList">Tag</option>
                        </select>
                      </div>
                      <input name="searchText" type="search" placeholder="search" onChange={this.handleChange} />
                      {/* eslint-disable-next-line */}
                      <i className="material-icons" onClick={this.handleSearch}>search</i>

                    </form>
                  </li>
                  {(isAuthenticated) ? (
                    <span>
                      <li>
                        <Notification />
                      </li>
                      <li>
                        <a href={`${url}bookmarks/`} className="bookmark-link">
                          <i className="material-icons">bookmark_border</i>
                        </a>
                      </li>

                      <li>
                        <img
                          className="small-navbar-profile dropdown-trigger"
                          data-target="nav-dropdown"
                          src={image}
                          alt={username}
                        />
                      </li>

                      <ul id="nav-dropdown" className="dropdown-content">
                        <li>
                          <a href={this.handleprofileView()}>Profile</a>
                        </li>
                        <li>
                          <a href={this.handleCreateNewArticle()}>New article</a>
                        </li>
                        {/* eslint-disable-next-line */}
                        <li
                          onClick={this.logout}
                          onKeyPress={this.logout}
                          className="nav-logout"
                        >
                            Logout
                        </li>
                      </ul>
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
  viewProfileReducer: PropTypes.instanceOf(Object).isRequired,
  fetchUserDets: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: state.Login,
  viewProfileReducer: state.viewProfileReducer,
});

const matchDispatchToProps = dispatch => bindActionCreators(
  { fetchUserDets: fetchUserDetails, search: searchItem }, dispatch);

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Navbar);
