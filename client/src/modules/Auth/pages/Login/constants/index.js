import Joi from 'joi-browser';

export const loginSchema = Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
}).with('email', 'password');

export const LOGIN_FORM = 'LOGIN_FORM';

