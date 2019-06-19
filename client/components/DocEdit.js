import React, { Component } from 'react';
import DocAvatar from '../public/doctor-avatar.jpg'

class DoctorEdit extends Component {
    render() {
        return (
            <div class="columns">
                <div class="column is-one-third" style={{marginLeft: '250px'}}><img src={DocAvatar} style={{height:'43rem'}}></img></div>
                <div class="column"><form method="POST" action='/doctor/editdoctor' style={{width:'40rem', border:'2px solid #5dd1b2', padding:'20px', marginLeft:'42px'}}>
                <div>
                    <h3 className='tch title is-4'>Edit Credentials</h3>
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
            </form></div>
                {/* <div class="column">Auto</div> */}
            </div>
        )
    }
}

export default DoctorEdit;