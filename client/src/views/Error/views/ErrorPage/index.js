import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { styles } from './styles';

var ErrorPage = ({ classes }) => {
    return (
        <div className={classes.container}>
            <Grid item xs={12}>
                <Grid
                    container
                    alignItems="center"
                    justify="center">
                    <Typography variant="display4" className={classes.description}>
                        404
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    alignItems="center"
                    justify="center">
                    <Typography variant="display2" className={classes.description}>
                        Page Not Found
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

ErrorPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ErrorPage);