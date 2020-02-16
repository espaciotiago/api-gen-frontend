import React from 'react'
import PrimaryButton from './PrimaryButton'
import AccentButton from './AccentButton'
//Styles
import '../styles/landing.scss'
//Assets
import Logo from '../assets/logo.png'

function LandingHeader(props) {
    return (
        <nav className="header">
            <img src={Logo} alt="logo"/>
            <div className="actions">
                <AccentButton label="Signup" onClick ={props.onSignupClick}/>
                <PrimaryButton label="Login" onClick ={props.onLoginClick}/>
            </div>
        </nav>
    )
}

export default LandingHeader