import React from 'react'

function SelectInput(props) {
    const label = props.label ? props.label : ""
    const options = props.options ? props.options : []
    options.unshift({ label: `Select a ${label}` })
    return (
        <div className="input-contanier">
            <label>{label}</label><br />
            <div className="container">
                <select>
                    {options.map((option, index) => {
                        return (
                            <option
                                value={option.value ? option.value : "" + index}
                                key={option.value ? option.value : "" + index}>
                                {option.label ? option.label : ""}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default SelectInput