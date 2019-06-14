import React, { Component } from "react";
import './Bulma.scss';
import './DocRegister.scss'

class DocProfile extends Component {
    render() {
        return (
            <div>
                <form action="" method="post">
                    <div className='doc-register'>
                        <h3 className='tch title is-4'>Input Doctor Details</h3>
                        {/* <p class="tch subtitle is-5">Login Here</p> */}
                        <div className="field">
                            <label className="label">Full Name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Enter Full  Name" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">College</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Your College Name" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Degree</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Your College Degree" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Specialisation</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Your Specialisation" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Medical Registration Number</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Your License Number" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Clinic Address</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Your Clinic Address" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">City</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Your City" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user" />
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
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="question" />
                                    Yes
                                                                     </label>
                                <label className="radio">
                                    <input type="radio" name="question" />
                                    No
                                                         </label>
                            </div>
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
            </div>
        );
    }
}

export default DocProfile;