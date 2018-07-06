import Joi from 'joi-browser';

const createValidator = (schema) => {
    return values => {
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
};

export default createValidator;