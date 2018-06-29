import { checkEmail, checkPassword } from '../../../services/validation';

export const validate = values => {
    const errors = {};
    const requiredFields = [
        'username',
        'email',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = true;
        }
    });
    const { email, password } = values;
    if (
        email &&
        !checkEmail(email)
    ) {
        errors.email = true;
    }

    if (
        password &&
        !checkPassword(password)
    ) {
        errors.password = true;
    }
    return errors;
};