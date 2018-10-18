import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import M from 'materialize-css';
import { searchItem } from '../containers/Search/actions';
import Register from './Authentication/Signup/Register';
import Login from '../containers/Authentication/Login/Login';
import SocialLogin from './Authentication/Login/socialLogin/SocialLogin';

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
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAuthenticated');
    window.location.reload(true);
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
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="white z-depth-0">
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo black-text">Authors Haven</a>
                {(isAuthenticated) ? (
                  <ul className="right hide-on-med-and-down grey-text">
                    <li />
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
                    <li><i className="material-icons">notifications_none</i></li>
                    <li><i className="material-icons">bookmark_border</i></li>
                    <button type="button" className="waves-effect waves-light btn white teal-text" onClick={this.logout}>
                          logout
                    </button>
                  </ul>) : (
                    <ul className="right hide-on-med-and-down grey-text">
                      <li><i className="material-icons">search</i></li>
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
                    </ul>)}

              </div>
            </div>
          </nav>
        </div>
        <Register />
        <Login />
        <SocialLogin />
      </div>

    );
  }
}

Navbar.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  search: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ search: searchItem },
  dispatch);


const mapStateToProps = state => ({ state: state.Login });

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
