import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from 'react-load-image';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import placeholder from '../../../../../../output.svg';
import Preloader from '../../../../../../views/Preloader';
import Rating from '../../components/Rating';
import Blur from 'react-blur';

const Info = ({ film, classes }) => {
    let backgroundImage = film.images ? film.images[2].original : '';
    return (
        <React.Fragment>
            <Blur img={backgroundImage} blurRadius={6} enableStyles>
                <Grid
                    container
                    alignItems="center"
                    justify="flex-end"
                    className={classes.container}
                >
                    <ImageLoader
                        src={film.image ? film.image : ''}
                        className={classes.image} >
                        <img className={classes.image} alt={film.title} />
                        <div>Error!</div>
                        <Preloader image={placeholder} />
                    </ImageLoader>
                    <Grid item xs={6} >
                        <Typography variant="display2" className={classes.title}> {film.title} </Typography>
                        <div className={classes.rating}>
                            <Rating film={film} />
                        </div>
                    </Grid>
                </Grid>
            </Blur>
            <Grid
                container
                alignItems="center"
                justify="flex-end"
            >
                <Grid item xs={6} >
                    <div className={classes.description}>
                        <Typography variant="caption"> Description </Typography> <br />
                        <Typography> {film.description} </Typography>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>

    );
};

Info.propTypes = {
    classes: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);
