import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from 'react-load-image';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import placeholder from '../../../../../../output.svg';
import Preloader from '../../../../../../views/Preloader';

const Info = ({ film, classes }) => {
    return (
        <Grid
            container
            alignItems="flex-start"
            justify="space-between">
            <ImageLoader
                src={film.image ? film.image : ''}
                className={classes.image} >
                <img className={classes.image} alt={film.title} />
                <div>Error!</div>
                <Preloader image={placeholder} />
            </ImageLoader>
            <Grid item xs={7} >
                <div className={classes.title}>
                    <Typography variant="title" className={classes.title}> {film.title} </Typography>
                </div>
                <Typography> {film.description} </Typography>
            </Grid>
        </Grid>

    );
};

Info.propTypes = {
    classes: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);