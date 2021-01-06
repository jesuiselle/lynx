import React, {useState} from 'react';
import Step from './Step';
import Preview from './Preview';
import validate from '../validation/validate';

const Form = () => {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState()

    const [formData, setFormData] = useState({
        stepOne: {
            firstStep: {
                checked: false,
                value: 'thank you',
                required: true,
                type: 'input:checkbox'
            }
        },
        stepTwo: {
            message: {
                value: '',
                required: true,
                type: 'input:textarea',
                placeholder: 'Send Me Meme(s)...👀'
            }
        }
    });

    const changeHandler = (step, e) => {
        e.persist();
        setFormData(prev => ({
            ...prev,
            [step]: {
                ...prev[step],
                [e.target.name]: {
                    ...prev[step][e.target.name],
                    value: e.target.value,
                    checked: checked ? () => setChecked(!checked) : e.target.checked
                }
            }
        }));
    }

    const stepChangeHandler = (values, e) => {
        e.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setStep(step + 1);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form className="mx-auto w-50 p-3" onSubmit={submitHandler}>
            {step === 1 && <Step
                data={formData.stepOne}
                onChange={changeHandler}
                onStepChange={stepChangeHandler}
                errors={errors}
                stepKey="stepOne"
                step={1}
            />}
            {step === 2 && <Step
                data={formData.stepTwo}
                onChange={changeHandler}
                onStepChange={stepChangeHandler}
                errors={errors}
                stepKey="stepTwo"
                onPrevStep={(step) => setStep(step)}
                step={2}
            />}
            {step === 3 && <Preview
                onPrevStep={() => setStep(step - 1)}
                data={[
                    {label: '', value: formData.stepTwo.message.value},
                ]}
            />}
        </form>
    );
}

export default Form;