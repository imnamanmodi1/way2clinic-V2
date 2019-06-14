import React, { Component } from "react";
import './Bulma.scss';
import './DocRegister.scss'

class DocRegister extends Component {
    render() {
        return (
            <form method="POST" action='/doctor/register'>
                <div className='doc-register'>
                    <h3 className='tch title is-4'>Register Yourself</h3>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="text" name="name" placeholder="Doctor's Full Name" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" name="email" type="email" placeholder="Email input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            <span className="icon is-small is-right">
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" name="password" type="password" placeholder="Enter your password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock" />
                            </span>
                            <span className="icon is-small is-right">
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox" />
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        {/* <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                Yes
                  </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                No
                  </label>
                        </div> */}
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default DocRegister;