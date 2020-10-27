import './App.css'
import React from 'react'

import Logo from '../components/templates/Logo'
import Navi from '../components/templates/Navi'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Navi/>
        <Main/>
        <Footer/>
    </div>
    