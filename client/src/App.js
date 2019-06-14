import React from 'react';
import './Bulma.scss';
import Header from './Header';
import DocProfile from './DocProfile';
import Footer from './Footer';
// import DocLogin from './Doclogin'
// import { Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />,
      <DocProfile />
      <Footer />
    </>
  )
}

export default App;

