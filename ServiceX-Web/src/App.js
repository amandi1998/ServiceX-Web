
  //   App.js is the parent componenet 

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './components/pages/Services.css'
import './components/Navbar.css'
import './components/Button.css'
import './components/Button'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/login';
import Signup from './components/pages/signup'
import Forgetpassword from './components/pages/forgetpassword';
import Afterforgetpassword from './components/pages/afterforgetpassword'
import Profile from './components/pages/profile'
import Insideservice from './components/pages/insideservice'
import Showaddedservices from './components/pages/showaddedservices'
import UploadServices from './components/pages/uploadservice'
import Servicem from './components/pages/servicem'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/forgetpassword' component={Forgetpassword} /> 
          <Route path='/afterforgetpassword' component={Afterforgetpassword} /> 
          <Route path='/profile' component={Profile} /> 
          <Route path='/insideservice' component={Insideservice} /> 
          <Route path='/showaddedservices' component={Showaddedservices} /> 
          <Route path='/uploadservice' component={UploadServices} /> 
          <Route path='/servicem' component={Servicem} /> 

        </Switch>
        <Switch>
        </Switch>
      </Router>
      

  
    </>


  );
}

export default App;
