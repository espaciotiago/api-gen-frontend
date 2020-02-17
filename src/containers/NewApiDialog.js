import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'
import Input from '../components/Input'
import AreaInput from '../components/AreaInput'
import Dialog from '../components/Dialog'

function NewApiDialog(props) {
    const { open, onClose, onNewApi } = props

    return (
        <Dialog open={open} handleClose={onClose}>
            {/* Title */}
            <h1>New Api</h1>
            {/* Form */}
            <div>
                <Input label="Name" />
                <AreaInput label="Description" />
            </div>
            {/* Actions */}
            <div className="dialog-actions">
                <AccentButton label="Cancel" onClick={onClose} />
                <PrimaryButton label="Create" onClick={onNewApi} />
            </div>
        </Dialog>
    )
}

export default NewApiDialog