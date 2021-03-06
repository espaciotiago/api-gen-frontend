import React from 'react'
//Styles
import '../styles/landing.scss'
//Assets
import People from '../assets/people.png'
import Play from '../assets/play.png'

function Landing() {
    //---------------------------------------
    //Render the view
    //---------------------------------------
    return (
        <div>
            <div className="main-container">
                <div className="card card-info">
                    <img src={People} alt="people" />
                    <div className="info">
                        <h1>
                            Take your APIs to the next level
                        </h1>
                        <br />
                        <h3 style={{ textAlign: 'justify' }}>
                            Build and deploy your APIs graphically and quickly.
                            <br />
                            Just drag and drop your entries and create the relations between them.
                            After that we will do all the hard work, but don't worry, we love to get our hands dirty.
                        </h3>
                    </div>
                    <div className="play-container">
                        <span>
                            <img src={Play} alt="play" />
                        </span>
                    </div>
                </div>
                <span className="card card-info-min card-info-purple">
                    <h1>
                        API as a service
                    </h1>
                </span>
                <span className="card card-info-min card-info-pink">
                    <h1>
                        Princing plans
                    </h1>
                </span>
            </div>
        </div>
    )
}

export default Landing