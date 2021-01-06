import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';

const InputC = ({type, checked, placeholder, name, value, onChange, error}) => {
    if (type === 'checkbox') {
        return (
            <div>
                <Input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    value={value}
                    autoComplete="off"
                />
                {value === 'thank you' ? 'Made My Day?' : ''}
                {<div>{error}</div>}
            </div>
        )
    } else {
        return (
            <div>
                <Input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    value={value}
                    autoComplete="off"
                />
                {value === 'thank you' ? 'Made My Day?' : ''}
                {<div>{error}</div>}
            </div>
        )
    }
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.bool
    ]),
    onChange: PropTypes.func.isRequired
}

export default InputC;