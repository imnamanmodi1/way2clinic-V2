import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Doclogin from './Doclogin';
import DocRegister from './DocRegister';

class Header extends Component {
  render() {
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
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href='/doctor/login' className="button is-success">
                  Log in
            </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
    <Router>
      <Route path='/doctor/login' component={Doclogin} />
      {/* <Route path='/doctor/register' component={DocRegister} /> */}
    </Router>
    </div>
    );
  }
}

export default Header;