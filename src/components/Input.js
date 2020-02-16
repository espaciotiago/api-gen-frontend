import React from 'react'

function Input(props) {
    const label = props.label ? props.label : ""

    return (
        <div className="input-contanier">
            <label>{label}</label><br />
            <div className="container">
                <input placeholder={label} type={props.type}/>
            </div>
        </div>
    )
}

export default Input