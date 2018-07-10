import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const RenderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom

}) => {
    return (
        <FormControl>
            <InputLabel htmlFor="order-by">Order By</InputLabel>
            <Select
                error={touched && error}
                {...input}
                {...custom}
                inputProps={{
                    name: 'order-by',
                    id: 'order-by',
                }}
            >
                {children}
            </Select>
        </FormControl >
    );
};

RenderSelectField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
};

export default RenderSelectField;