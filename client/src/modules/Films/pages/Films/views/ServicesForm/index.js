import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { styles } from './styles';

import SearchForm from '../SearchForm';
import SelectForm from '../SelectForm';

const ServicesForm = ({ classes, searchProps, selectProps }) => {
    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="space-around">
            <SearchForm {...searchProps} />
            <SelectForm {...selectProps} />
        </Grid>
    );
};

ServicesForm.propTypes = {
    classes: PropTypes.object.isRequired,
    searchProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesForm);