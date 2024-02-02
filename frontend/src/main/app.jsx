import './app.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Home from './../components/home/home'
import Logo from './../components/templates/logo'
import Nav from './../components/templates/nav'
import Footer from './../components/templates/footer'

export default props => 
    <div className="app">
        <Logo />
        <Nav />

        <Home />

        <Footer />
    </div>