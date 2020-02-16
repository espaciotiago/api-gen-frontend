import React from 'react'

function AccentButton(props){
    const label = props.label ? props.label : ""
    return(
        <span className="accent-button" onClick={props.onClick}>
            {label.toUpperCase()}
        </span>
    )
}

export default AccentButton