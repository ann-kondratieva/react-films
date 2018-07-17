import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Preloader = ({ image, classes }) => {
    return (
        <img src={image} alt="loading" className={classes.image} />
    );
};

Preloader.propTypes = {
    classes: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired
};

export default withStyles(styles)(Preloader);