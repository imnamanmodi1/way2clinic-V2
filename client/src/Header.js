import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Doclogin from './Doclogin';
import DocRegister from './DocRegister';
import DocOnBoarding from './DocOnBoarding';
import Search from '../components/SearchBar';

function LoginButton(props) {
  return (
    <div className="buttons">
      <a href='/doctor/register' className="button is-light">
        Register
    </a>
      <a onClick={props.onClick} href='/doctor/login' className="button is-success">
        Log in
    </a>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div className="buttons">
      <a onClick={props.onClick} href='/doctor/logout' className="button is-danger">
        Logout
      </a>
    </div>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    console.log('inside logout')
    console.log(cookie,'this is cookie')
    this.delete_cookie('jwtToken')
    console.log(cookie,'this is cookie after logout')
    this.setState({ isLoggedIn: false });
  }

  delete_cookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log('cookie is cleared')
  };


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button
    var cookie = document.cookie;
    cookie = cookie.split('=')
    if (cookie[0] === "jwtToken") {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }



    return (
      <div>
        <div classNameName="App">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
              </a>
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a href='/' className="navbar-item">
                  Home
                </a>
                <a className="navbar-item">
                  Documentation
                </a>
                <a href='/doctor/register' className="navbar-item">
                  Register
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      About
                    </a>
                    <a className="navbar-item">
                      Jobs
                    </a>
                    <a className="navbar-item">
                      Contact
                      </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      Report an issue
                     </a>
                  </div>
                  <Search />
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  {button}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Router>
          <div>
            <Route path='/doctor/login' component={Doclogin} />
            <Route path='/doctor/register' component={DocRegister} />
            <Route path='/doctor/onboarding' component={DocOnBoarding} />

          </div>
        </Router>
      </div>
    );
  }
}

export default Header;