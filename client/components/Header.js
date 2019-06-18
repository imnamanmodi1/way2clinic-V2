import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Clinic from '../public/download.png';
import Doclogin from './Doclogin';
import DocRegister from './DocRegister';
import DocOnBoarding from './DocOnBoarding';
import Search from './SearchBar';
import ReachDoctorCard from './ReachDoctorCard';
import DoctorProfile from './DoctorProfile'
import PatientRegister from './PatientRegister';
import PatientLogin from './PatientLogin';



import axios from 'axios';


// function   handleLogoutClick() {
//   console.log('inside logout')
//   // var cookie = document.cookie;
//   document.cookie = 'jwtToken' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
//   this.setState({ isLoggedIn: false });
// }

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

  // componentDidMount() {
  //   axios.post('http://localhost:8000/doctor/authenticate', {
  //     email: 'modi.naman14@gmail.com',
  //     password: 'Naman@123',
  //   })
  //   .then(function (response) {
  //     console.log(response.headers);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   console.log('inside logout')
  // }

  handleLogoutClick() {
    document.cookie = 'jwtToken' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    this.setState({ isLoggedIn: false });
  }


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
                <img src={Clinic} style={{ maxHeight: '3rem' }} />
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
                  {button}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Router>
          <div>
            <Route exact path='/' component={ReachDoctorCard} />
            <Route path='/patient/login' component={PatientLogin} />
            <Route path='/patient/register' component={PatientRegister} />
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