import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles';

import Loading from '../../../../../../views/Loading';
import { Typography } from '@material-ui/core';

const FilmsList = ({ items, classes, loadMore, hasMore }) => {

    items = items.map(({ title, description, image, _id }) =>
        <ListItem button key={_id}>
            <ListItemIcon>
                <img src={image} alt={title} className={classes.image} />
            </ListItemIcon>
            <ListItemText primary={title} secondary={description} />
        </ListItem>
    );

    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="center">
            <InfiniteScroll className={classes.list}
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<Grid
                    key="load"
                    container
                    alignItems="center"
                    justify="center">
                    <Loading />
                </Grid>}
            >
                <List className={classes.list} key="list">
                    {items}
                </List>
                {!hasMore && items.length === 0 && <Grid className={classes.container}
                    container
                    alignItems="center"
                    justify="center">
                    <Typography> {'Sorry, we can\'t find anything to show :('} </Typography>
                </Grid>}
            </InfiniteScroll>
        </ Grid >
    );
};

FilmsList.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
};

export default withStyles(styles)(FilmsList);
