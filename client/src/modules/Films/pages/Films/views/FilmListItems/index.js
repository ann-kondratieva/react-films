import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles';

const FilmsListItems = ({ items, classes, onClick }) => {
    return (
        <React.Fragment>
            {items.map(({ title, description, image, _id }) =>
                <ListItem onClick={() => onClick(_id)} button={true} key={_id} id={_id}>
                    <ListItemIcon>
                        <img src={image} alt={title} className={classes.image} />
                    </ListItemIcon>
                    <ListItemText primary={title} secondary={description} />
                </ListItem>)}
        </React.Fragment>
    );
};

FilmsListItems.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(FilmsListItems);