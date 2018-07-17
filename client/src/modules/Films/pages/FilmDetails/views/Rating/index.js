import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Loading from '../../../../../../views/Loading';

const Rating = ({ film, classes, onStarClick, loadingRating }) => {
    return (
        <Grid
            className={classes.container}
            container
            alignItems="center"
            justify="center">
            {loadingRating ? <Loading /> : <StarRatingComponent
                className={classes.stars}
                name="rate"
                starCount={5}
                value={film ? film.rating : 0}
                onStarClick={onStarClick}
            />}
        </Grid>
    );
};

Rating.propTypes = {
    classes: PropTypes.object.isRequired,
    film: PropTypes.object,
    onStarClick: PropTypes.func.isRequired,
    loadingRating: PropTypes.bool.isRequired
};

export default withStyles(styles)(Rating);