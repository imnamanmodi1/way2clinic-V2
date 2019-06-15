import React, { Component } from "react";
import './Bulma.scss'
import './Doc-Card.scss'
import DocAvatar from '../public/doctor-avatar.jpg';



class DoctorProfile extends Component {
    render() {
        return (
            <div className="card doc-card border-card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={DocAvatar} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">Dr. John Smith</p>
                            <span className = 'content-row'>
                                <p className="subtitle is-6">'degree', 'post-graduate degree'</p>
                            </span>
                            <div>
                            <span className = 'content-row'>
                                'Allopath/Dental/Ayurveda'
                            </span>
                            <span className = 'content-row'>
                                , 'Speciality for eg. Cardiologist'
                            </span>
                            <span className = 'content-row'>
                                , 'experience'
                            </span>
                            <span className = 'content-row'>
                                , 'experience as a specialist'
                            </span>
                            </div>
                           <div className='media-content license-box'>
                               <p className='subtitle is-6'>
                               <i class="fas fa-check-circle"></i>
                                   <span>
                                       <span>Medical License Number</span>
                                   </span>
                               </p>
                               <p className='subtitle is-6'>
                               <i class="fas fa-thumbs-up"></i>
                                   <span>
                                       <span>upvotes in pecentage eg 69%</span>
                                   </span>
                               </p>
                           </div>
                        </div>
                    </div>
                    <div className="content margin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorProfile;