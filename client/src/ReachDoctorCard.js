import React, { Component } from "react";
import './Bulma.scss';
import DocAvatar from '../public/doctor-avatar.jpg';
import './Doc-Card.scss'


class ReachDoctorCard extends Component {
    render() {
        return (
            <div className='columns'>
            <div className='column'>
            <div className="card align doc-card columns">
               <div className="column">
                   <img src={DocAvatar} alt=""/>
               </div>
               <div className="column">
                   <a href="http://">Dr. Naman Modi</a>
                   <div>
                   <a href="http://">Gynecologist</a>
                   <p>Gynae Problems</p>
                   <p>Normal Vaginal Problems</p>
                   </div>
               </div>
               <div className="column">
                   <p><i class="fas fa-thumbs-up"></i>   96%</p>
                   <p>A160 Mayur vihar</p>
                   <p>Patola chauk, Pune</p>
                   <p><i class="fas fa-rupee-sign"></i>400</p>
                   <p>Mon-Sat</p>
                   <p>8:00 AM-9:00 Pm</p>
                   <button className="button is-success">Call Now</button>
               </div>
            </div>
            </div>
            <div className='column'>
            <div className="card align doc-card columns">
               <div className="column">
                   <img src={DocAvatar} alt=""/>
               </div>
               <div className="column">
                   <a href="http://">Dr. Naman Modi</a>
                   <div>
                   <a href="http://">Gynecologist</a>
                   <p>Gynae Problems</p>
                   <p>Normal Vaginal Problems</p>
                   </div>
               </div>
               <div className="column">
                   <p><i class="fas fa-thumbs-up"></i>   96%</p>
                   <p>A160 Mayur vihar</p>
                   <p>Patola chauk, Pune</p>
                   <p><i class="fas fa-rupee-sign"></i>400</p>
                   <p>Mon-Sat</p>
                   <p>8:00 AM-9:00 Pm</p>
                   <button className="button is-success">Call Now</button>
               </div>
            </div>
            </div>
            </div>
        )
    }
}

export default ReachDoctorCard;