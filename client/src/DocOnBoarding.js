import React, { Component } from "react";
import './Bulma.scss';
import './DocOnBoarding.scss'

class DocOnBoarding extends Component {
    render() {
        return (
            <form action='/doctor/onboarding' method='POST'>
                <div className='doc-register'>
                    <h3 className='tch title is-4'>OnBoarding Process</h3>
                    {/* <p class="tch subtitle is-5">Login Here</p> */}
                    <div className="field">
                        <label className="label">Degree</label>
                        <div className="control has-icons-left has-icons-right">
                            <input name="degree" className="input is-success" type="degree" placeholder="Your Qualification(BSC, MD etc.)" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Specialisation</label>
                        <div className="control has-icons-left has-icons-right">
                            <input name="specialisation" className="input is-success" type="text" placeholder="Ex: Physician" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Medical Reg. No.</label>
                        <div className="control has-icons-left has-icons-right">
                            <input name="medicalId" className="input is-success" type="text" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Clinic Address</label>
                        <div className="control has-icons-left has-icons-right">
                            <input name="clinicAddress" className="input is-success" type="text" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                        <div className="boxes"></div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-text">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default DocOnBoarding;