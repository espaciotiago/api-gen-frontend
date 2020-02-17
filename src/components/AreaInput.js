import React from 'react'

function AreaInput(props) {
    const label = props.label ? props.label : ""

    return (
        <div className="input-contanier">
            <label>{label}</label><br />
            <div className="container">
                <textarea placeholder={label} type={props.type} rows={8}/>
            </div>
        </div>
    )
}

export default AreaInput