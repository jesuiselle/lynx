const validate = (fields) => {

    let errors = {};

    for (let field in fields) {

        const currentField = fields[field];

        if (currentField.required && currentField.value === '') {
            errors[field] = 'This field is required!';
        }

        if (currentField.required && currentField.checked === false) {
            errors[field] = 'Check me to made my day!';
        }

        if (!errors[field] && currentField.minLength && currentField.value.trim().length < currentField.minLength) {
            errors[field] = `This field must have at least ${currentField.minLength} characters`;
        }

    }

    return errors;
}

export default validate;