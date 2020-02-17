import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import InformationBanner from '../components/InformationBanner'
import ApiCard from '../components/ApiCard'
import PrimaryButton from '../components/PrimaryButton'
import NewApiDialog from '../containers/NewApiDialog'

function Dashboard() {
    //---------------------------------------
    //General utilities
    //---------------------------------------
    const history = useHistory()
    //---------------------------------------
    //State variables
    //---------------------------------------
    const [openNewApi, setOpenNewApi] = useState(false)
    //---------------------------------------
    //Methods
    //---------------------------------------
    const onNewApi = () => {
        history.push('./api')
    }
    const onOpenNewApi = () => {
        setOpenNewApi(true)
    }
    const onCloseNewApi = () => {
        setOpenNewApi(false)
    }
    //---------------------------------------
    //Render the view
    //---------------------------------------
    return (
        <div>
            <NewApiDialog open={openNewApi} onClose={onCloseNewApi} onNewApi={onNewApi} />
            <InformationBanner />
            {/* Apis container - Demo */}
            <div className="apis-container">
                <div className="api-header">
                    <h1>Your APIs</h1>
                    <PrimaryButton label="New API" onClick={onOpenNewApi} />
                </div>
                <div className="apis">
                    <ApiCard />
                    <ApiCard />
                    <ApiCard />
                    <ApiCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard