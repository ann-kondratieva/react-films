import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import RenderTextField from '../../../../../../views/RenderTextField';

const SearchForm = ({ handleSubmit, classes }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                className={classes.textField}
                name="search"
                component={RenderTextField}
                label="Search"
                margin="dense"
                type="text"
            />
        </form>
    );
};

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm()(withStyles(styles)(SearchForm));