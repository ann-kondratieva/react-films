import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const RenderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    return (
        < TextField
            error={touched && error}
            placeholder={label}
            {...input}
            {...custom}
        />
    );
};

RenderTextField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
};

export default RenderTextField;


