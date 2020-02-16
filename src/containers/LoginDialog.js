import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'
import Input from '../components/Input'
import Dialog from '../components/Dialog'

function LoginDialog(props) {
    const { open, onClose, onLogin } = props

    return (
        <Dialog open={open} handleClose={onClose} min>
            {/* Title */}
            <h1>Login</h1>
            {/* Form */}
            <div>
                <Input label="Email" type="email"/>
                <Input label="Password" type="password"/>
            </div>
            {/* Actions */}
            <div className="dialog-actions">
                <AccentButton label="Cancel" onClick={onClose} />
                <PrimaryButton label="Login" onClick={onLogin} />
            </div>
        </Dialog>
    )
}

export default LoginDialog