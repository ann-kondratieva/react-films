import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles';

import Loading from '../../../../../../views/Loading';

const FilmsList = ({ loading, items, classes }) => {
    return (
        <Grid className={classes.container}
            container
            alignItems="center"
            justify="center">
            {loading ? <Grid className={classes.loadContainer}
                container
                alignItems="center"
                justify="center">
                <Loading /> 
            </Grid> :
                <List className={classes.list}>
                    {items.map(({ title, description, image }, index) =>
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
    loading: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
};

export default withStyles(styles)(FilmsList);