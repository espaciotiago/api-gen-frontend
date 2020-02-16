import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'
import Input from '../components/Input'
import SelectInput from '../components/SelectInput'
import Dialog from '../components/Dialog'

function SignupDialog(props) {
    const genders = [
        { value: "M", label: "Masculine" },
        { value: "F", label: "Femenine" },
        { value: "O", label: "Other" }]
    const { open, onClose, onLogin } = props

    return (
        <Dialog open={open} handleClose={onClose}>
            {/* Title */}
            <h1>Signup</h1>
            {/* Form */}
            <div>
                <Input label="Name" />
                <Input label="Email" type="email" />
                <SelectInput label="Gender" options={genders} />
                <Input label="Password" type="password" />
                <Input label="Confirm password" type="password" />
            </div>
            {/* Actions */}
            <div className="dialog-actions">
                <AccentButton label="Cancel" onClick={onClose} />
                <PrimaryButton label="Login" onClick={onLogin} />
            </div>
        </Dialog>
    )
}

export default SignupDialog