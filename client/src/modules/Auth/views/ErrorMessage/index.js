import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const ErrorMessage = ({ classes, message, isShown }) => {
    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="center">
            {isShown && <Typography className={classes.message} >
                {message}
            </Typography>}

        </ Grid >
    );
};

ErrorMessage.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired
};

export default withStyles(styles)(ErrorMessage);