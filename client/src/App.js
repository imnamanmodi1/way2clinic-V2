import React from 'react';
import './Bulma.scss';
import Header from './Header'
import DocOnBoarding from './DocOnBoarding';
import Footer from './Footer'
import DoctorProfile from './DoctorProfile'
import ReachDoctorCard from './ReachDoctorCard'
// import DocLogin from './Doclogin'
// import { Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />,
      {/* <DocOnBoarding /> */}
      {/* <DoctorProfile /> */}
      <ReachDoctorCard />
      <Footer />
    </>
  )
}

export default App;

