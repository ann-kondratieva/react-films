import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const ErrorMessage = ({ classes, message }) => {
    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="center">
            <Typography className={classes.message} >
                {message}
            </Typography>
        </ Grid >
    );
};

ErrorMessage.propTypes = {
    classes: PropTypes.object,
    message: PropTypes.string.isRequired
};

export default withStyles(styles)(ErrorMessage);