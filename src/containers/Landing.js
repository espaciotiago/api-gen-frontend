import React,{useState} from 'react'
import LandingHeader from '../components/LandingHeader'
import ApiCard from '../components/ApiCard'
import LoginDialog from '../containers/LoginDialog'
import SignupDialog from '../containers/SignupDialog'
import InformationBanner from '../components/InformationBanner'
//Styles
import '../styles/landing.scss'

function Landing() {
    const [openLogin, setOpenLogin] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)

    const onOpenLogin = () => {
        setOpenLogin(true)
    }
    const onCloseLogin = () => {
        setOpenLogin(false)
    }
    const onOpenSignup = () => {
        setOpenSignup(true)
    }
    const onCloseSignup = () => {
        setOpenSignup(false)
    }

    return (
        <div>    
            <SignupDialog open = {openSignup} onClose = {onCloseSignup}/>
            <LoginDialog open = {openLogin} onClose = {onCloseLogin}/>
            <LandingHeader onLoginClick = {onOpenLogin} onSignupClick = {onOpenSignup}/>
            <InformationBanner />
            {/* Apis container - Demo */}
            <div className="apis-container">
                <h1>Demo API</h1>
                <div className="apis">
                    <ApiCard />
                </div>
            </div>
        </div>
    )
}

export default Landing
