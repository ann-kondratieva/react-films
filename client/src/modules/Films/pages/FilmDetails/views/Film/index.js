import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';

import Loading from '../../../../../../views/Loading';
import Info from '../../components/Info';
import Gallery from '../../components/Gallery';
import Comments from '../../components/Comments';


const Film = ({ film, classes, loading }) => {
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.mainContainer}>
            {loading ? <Grid container
                alignItems="center"
                justify="center"
                className={classes.loadingContainer} > <Loading /> </Grid> :
                <Grid item xs={7} >
                    <Info film={film} />
                    <Gallery images={film.images} />
                    <Comments film={film} />
                </Grid>}
        </Grid>
    );
};

Film.propTypes = {
    classes: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Film);