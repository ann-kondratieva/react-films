import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const RenderSearchField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    return (
        <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <Search />
            </Grid>
            <Grid item>
                < TextField
                    error={touched && error}
                    placeholder={label}
                    {...input}
                    {...custom}
                />
            </Grid>
        </Grid>
    );
};

RenderSearchField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
};

export default RenderSearchField;


