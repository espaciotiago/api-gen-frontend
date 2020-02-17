import React from 'react'
import AccentButton from './AccentButton'
//Styles
import '../styles/header.scss'
//Assets
import UserM from '../assets/user-m.png'

function HeaderWrapper() {
    return (
        <nav className="header-wrapper">
            <img src={UserM} alt="logo"/>
            <h4>Tiago Moreno Benavides</h4>
            <div className="actions">
                <AccentButton label="Logout"/>
            </div>
        </nav>
    )
}

export default HeaderWrapper
