import Joi from 'joi-browser';

const schema = Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
}).with('email', 'password');

export const validate = values => {
    const errors = {};
    Joi.validate({ ...values }, schema, function (err) {
        if (err) {
            const { type, context: { peer, label } } = err.details[0];
            if (type === 'object.with') {
                errors[peer] = true;
            } else {
                errors[label] = true;
            }
        }
    });
    return errors;
};