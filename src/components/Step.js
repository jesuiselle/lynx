import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputC from './Input';

const Step = ({ data, onChange, onStepChange, errors, stepKey, step, onPrevStep }) => {
    let output = [];

    for(const [key, val] of Object.entries(data)) {
        if (val.type.split(':')[0] === 'input') {
            output.push(<InputC
                key={key}
                placeholder={val.placeholder}
                name={key}
                checked={val.checked}
                value={val.value}
                onChange={(e) => onChange(stepKey, e)}
                error={errors[key]}
                type={val.type.split(':')[1]}
            />);
        }
    }
    return(
        <Fragment>
            {output}
            {step > 1 && <button type="button" onClick={() => onPrevStep(step - 1)}>Back</button>}
            <button type="button" onClick={(e) => onStepChange(data, e)}>Next</button>
        </Fragment>
    );
}

Step.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onStepChange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    stepKey: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    onPrevStep: PropTypes.func
}

export default Step;