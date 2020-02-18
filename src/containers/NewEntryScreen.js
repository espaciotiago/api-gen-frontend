import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'
import DangerButton from '../components/DangerButton'
import Input from '../components/Input'
import SelectInput from '../components/SelectInput'
//Style
import '../styles/entry-dialog.scss'
//Assets
import Add from '../assets/add.png'

function SignupDialog(props) {
    const types = [
        { value: "string", label: "String" },
        { value: "number", label: "Number" },
        { value: "boolean", label: "Bollean" }]
    const { open, onClose, onCreate } = props

    return (
        <div>
            <div>
                <div className={open ? "new-entry move" : "new-entry"}>
                    <div className="header-entry">
                        <h1>New Entry</h1>
                        <span onClick={onClose}>X</span>
                    </div>
                    <hr />
                    <div className="entry-form">
                        <Input label="Entry name" />
                        <hr />
                        <div className="field-entry">
                            <h2>Fields</h2>
                            <span>
                                <img src={Add} alt="play" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={open ? "entry-summary move-summary" : "entry-summary"}>
                    <h1>Summary</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="entry-actions">
                        <DangerButton label="Delete this entry" />
                        <PrimaryButton label="Save this entry" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupDialog