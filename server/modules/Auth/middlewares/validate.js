import Joi from 'joi';

import { loginSchema, registerSchema } from '../constants';

export const validateLogin = (req, res, next) => {
    const { body: { email, password } } = req;
    const result = Joi.validate({ email, password }, loginSchema);
    if (!result.error === null) {
        res.statusMessage = 'Sorry, data doesn\'t match requested params';
        return res.status(401).send();
    } else next();
};

export const validateRegister = (req, res, next) => {
    const { body: { username, email, password } } = req;
    const result = Joi.validate({ username, email, password }, registerSchema);
    if (!result.error === null) {
        res.statusMessage = 'Sorry, data doesn\'t match requested params';
        return res.status(401).send();
    } else next();
};

