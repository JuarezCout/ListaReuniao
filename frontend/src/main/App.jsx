import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo'
import Navi from '../components/templates/Navi'
import Footer from '../components/templates/Footer'

import logo from './../assets/imgs/logo-ccb-light.png';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
/* 
export default props =>
    <HashRouter>
        <div className="app">
            <Logo/>
            <Navi/>
            <Routes/>
            <Footer/>
        </div>
    </HashRouter> */
    