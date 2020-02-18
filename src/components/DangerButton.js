import React from 'react'

function DangerButton(props){
    const label = props.label ? props.label : ""
    return(
        <span className="danger-button" onClick={props.onClick}>
            {label.toUpperCase()}
        </span>
    )
}

export default DangerButton