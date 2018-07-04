/* import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const RenderSelectForm = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Order By</InputLabel>
            <Select
                {...input}
                onChange={this.handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-simple',
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
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

export default RenderTextField; */