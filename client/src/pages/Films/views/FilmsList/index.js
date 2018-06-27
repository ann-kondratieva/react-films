import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
import styles from './styles';

const FilmsList = ({ films, classes }) => {
    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="center">
            {films.loading && <CircularProgress className={classes.progress} />}
            {films.items &&
                <List className={classes.list}>
                    {films.items.map(({ title, description, image }, index) =>
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <img src={image} alt={title} className={classes.image} />
                            </ListItemIcon>
                            <ListItemText primary={title} secondary={description} />
                        </ListItem>
                    )}
                </List>
            }
        </ Grid >
    );
};

FilmsList.propTypes = {
    films: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(FilmsList);