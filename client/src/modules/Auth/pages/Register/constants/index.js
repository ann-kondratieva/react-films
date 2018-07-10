import Joi from 'joi-browser';

export const registerSchema = Joi.object().keys({
    username: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
}).with('username', ['email', 'password']);

export const REGISTER_FORM = 'REGISTER_FORM';

