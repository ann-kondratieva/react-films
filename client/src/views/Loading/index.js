import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

const Loading = ({ classes }) => {
    return (
        <CircularProgress className={classes.progress} />
    );
};

Loading.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);