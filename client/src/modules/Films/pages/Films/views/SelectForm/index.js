import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { styles } from './styles';

import RenderSelectField from '../../../../../../views/RenderSelectField';

const SelectForm = ({ handleChange, classes }) => {
    return (
        <form className={classes.container}>
            <Field
                className={classes.selectField}
                onChange={handleChange}
                name="select"
                component={RenderSelectField}
                label="Order By"
                margin="dense"
                type="select">
                <MenuItem value='none'>
                    None
                </MenuItem>
                <MenuItem value='title'>Title</MenuItem>
                <MenuItem value='rating'>Rating</MenuItem>
            </Field>
        </form>
    );
};

SelectForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm()(withStyles(styles)(SelectForm));