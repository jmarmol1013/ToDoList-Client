import React from 'react'

const DropDown = ({ options = [], ...props }) => {
    return(
        <select {...props} >
        <option value='' disabled defaultValue='Select'>
            Select
        </option>
        {options.map(opt => (
            <option
                key={opt}
                value={opt}
            >{opt}</option>
        ))}
        </select>
    )
}

export default DropDown