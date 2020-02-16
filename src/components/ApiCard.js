import React from 'react'
import '../styles/main.scss'

function ApiCard(props) {
    return (
        <div className="api-card" onClick={props.onClick}>
            <h4>F*ckUp API</h4>
            <p>Api para consultar insultos random</p>
            <p><b>Entities: </b>3</p>
            <p><b>Queries: </b>3000</p>
        </div>
    )
}

export default ApiCard