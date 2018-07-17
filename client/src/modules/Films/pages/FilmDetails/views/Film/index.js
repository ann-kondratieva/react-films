import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';

import Loading from '../../../../../../views/Loading';
import Info from '../Info';
import Rating from '../Rating';
import Gallery from '../../components/Gallery';
import Comments from '../../components/Comments';

const Film = ({ film, classes, loading, onStarClick, loadingRating }) => {
    return (
        <Grid
            className={classes.container}
            container
            alignItems="center"
            justify="center">
            {loading ? <Loading /> :
                <Grid item xs={7} >
                    <React.Fragment>
                        <Info film={film} />
                        <Rating film={film} onStarClick={onStarClick} loadingRating={loadingRating} />
                        <Gallery images={film.images} />
                        <Comments film={film} />
                    </React.Fragment>
                </Grid>}
        </Grid>
    );
};

Film.propTypes = {
    classes: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    onStarClick: PropTypes.func.isRequired,
    loadingRating: PropTypes.bool.isRequired
};

export default withStyles(styles)(Film);