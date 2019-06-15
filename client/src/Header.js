import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Clinic from '../public/download.png';
import Doclogin from './Doclogin';
import DocRegister from './DocRegister';
import DocOnBoarding from './DocOnBoarding';
import Search from '../components/SearchBar';
import ReachDoctorCard from './ReachDoctorCard';
import DoctorProfile from './DoctorProfile';

class Header extends Component {
  render() {
    return (
      <div>
        <div classNameName="App">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src={Clinic} style={{maxHeight: '3rem'}} />
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
                    <a href='/doctor/profile' className="navbar-item">
                      Profile
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
                  <div className="buttons">
                    <a href='/doctor/register' className="button is-light">
                      Register
                    </a>
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
          <div>
            <Route exact path='/' component={ReachDoctorCard} />
            <Route path='/doctor/login' component={Doclogin} />
            <Route path='/doctor/register' component={DocRegister} />
            <Route path='/doctor/onboarding' component={DocOnBoarding} />
            <Route exact path='/doctor/profile' component={DoctorProfile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Header;