import React, { Component } from 'react';
import '../src/Bulma.scss'

import './styles/DocLogin.scss';


class Doclogin extends Component {
  render() {
    return (
      <div className='doc-login'>
        <h3 className='tch title is-4'>Are You A Doctor?</h3>
        <p class="tch subtitle is-5">Login Here</p>
        <form method='POST' action='/doctor/authenticate' className="measure center">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <label for="email">Email</label>
            <input className="input" type="email" name="email" placeholder="Email" />
            <span className="icon fix is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon fix is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <label for="password">Password</label>
            <input className="input" type="password" name="password" placeholder="Password" />
            <span className="icon fix is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success center">
              Login
          </button>
          </p>
        </div>
        </form>
      </div>
      );
  }
}

export default Doclogin;
