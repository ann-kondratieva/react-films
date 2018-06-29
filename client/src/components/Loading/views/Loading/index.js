import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import styles from './styles';

const Loading = ({ classes }) => {
    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="center">
            <CircularProgress className={classes.progress} />
        </ Grid >
    );
};

Loading.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Loading);