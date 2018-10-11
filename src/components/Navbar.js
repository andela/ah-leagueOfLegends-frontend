import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    render () {
        console.log(this.props.state)
        const { isAuthenticated } = this.props.state
        console.log(isAuthenticated)
        return (
            <div>
            <div className="navbar-fixed">
                <nav className="white z-depth-0">
                    <div className="container">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo black-text">
                        Authors Haven</a>
                        <a href="/" data-target="mobile-nav" className="sidenav-trigger">
                        </a>
                        {(isAuthenticated) ? (
                        <ul className="right hide-on-med-and-down grey-text">
                            <li><i className="material-icons">search</i></li>
                            <li><i className="material-icons">notifications_none</i></li>
                            <li><i className="material-icons">bookmark_border</i></li>
                        </ul>) :(
                        <ul className="right hide-on-med-and-down grey-text">
                            <li><i className="material-icons">search</i></li> 
                            <li><a className="waves-effect waves-light btn white teal-text
                                modal-trigger" href="#modal1">Sign in</a></li>
                            <li><button className="waves-effect waves-light btn white teal-text
                                modal-trigger" href='#modal2'>Get started</button></li>
                        </ul>)}
                        


                    </div>
                    </div>
                </nav>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       state: state.Login
    };
  }
  
  export  default connect(mapStateToProps)(Navbar);