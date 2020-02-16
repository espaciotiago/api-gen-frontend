import React from 'react'
//Style
import '../styles/dialog.scss'

function Dialog(props) {
    if (props.open) {
        return (
            <div className="dialog-container">
                <div className={props.min ? "min-dialog general-card" : "dialog general-card"}>
                    <div className="close-ico"><span onClick={props.handleClose}>X</span></div>
                    {props.children}
                </div>
            </div >
        )
    } else {
        return null
    }
}

export default Dialog