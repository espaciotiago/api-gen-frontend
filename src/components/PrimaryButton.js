import React from 'react'

function PrimaryButton(props){
    const label = props.label ? props.label : ""
    return(
        <span className="main-button" onClick={props.onClick}>
            {label.toUpperCase()}
        </span>
    )
}

export default PrimaryButton