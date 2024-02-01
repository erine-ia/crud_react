import './app.css'
import React from 'react'


import Main from './../components/templates/main'
import Logo from './../components/templates/logo'
import Nav from './../components/templates/nav'
import Footer from './../components/templates/footer'

export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>