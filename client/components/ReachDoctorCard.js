import React, { Component } from "react";
// import '../src/Bulma.scss'
import './styles/Doc-Card.scss';
import DocAvatar from '../public/doctor-avatar.jpg';
import PractoBanner from '../public/practo-banner.jpg';
import axios from 'axios'
const docArr = [];


console.log(docArr)



class ReachDoctorCard extends Component {
  state = {
    doctors: []
  }


  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/doctors')
      // .then((res) => res.json())
      .then((doctors) => {
        // data = JSON.stringify(data)
        console.log(doctors)
        doctors.data.map((doc, i) => {
          docArr.push(doc)
        })
        this.setState({ doctors: doctors.data });
        console.log(docArr, 'this is docArr')
        console.log(docArr[0].name, 'this is docArr[0]')
      })
      .catch(console.log)


  }

  render() {
    return (
      <div>
          <img className="slider" src={PractoBanner} />
          <div className="align-icon">
            <h3 className="heading">Find Top Doctors in Your Area</h3>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
          </div>
          <div className='mrows'>
        {this.state.doctors.map((data, i) => (
            <div className='mcolumns'>
              <div className="card align doc-card columns">
                <div className="column">
                  <img src={DocAvatar} alt="" />
                </div>
                <div className="column">
                  <a href="http://localhost:8000/doctor/profile/">Dr. {data.name}</a>
                  <div>
                    <a href="http://">{data.specialisation}</a>
                    <p>Gynae Problems</p>
                    <p>Normal Vaginal Problems</p>
                  </div>
                </div>
                <div className="column">
                  <p><i class="fas fa-thumbs-up"></i>   96%</p>
                  <p>{data.clinicAddress}</p>
                  {/* <p>{data.city}</p> */}
                  <p><i class="fas fa-rupee-sign"></i>400</p>
                  <p>Mon-Sat</p>
                  <p>8:00 AM-9:00 PM</p>
                  <button className="button is-success">Call Now</button>
                </div>
              </div>
            </div>
        ))}
          </div>
      </div>
    )
  }
}

export default ReachDoctorCard;