import './Painel.css'

import React from 'react'

import Header from './templates/Header'
import Main from './templates/Main'
import Footer from './templates/Footer'
import Nav from './templates/Nav'

export default props=>
    <div className="painel">
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>