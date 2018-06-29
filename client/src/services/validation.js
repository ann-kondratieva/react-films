import { REGEXP } from '../constants/regexp';

export const checkEmail = (email) => {
    var isValidEmail = checkValue(email, REGEXP.email);
    return isValidEmail;
};

export const checkPassword = (password) => {
    var isValidPassword = checkValue(password, REGEXP.password);
    return isValidPassword;
};

const checkValue = (value, regexp) => {
    const isValid = regexp.test(value);
    return isValid;
};