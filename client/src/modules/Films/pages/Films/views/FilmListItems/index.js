import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from 'react-load-image';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles';
import placeholder from '../../../../../../output.svg';
import Preloader from '../../../../../../views/Preloader';

const FilmsListItems = ({ items, classes, onClick }) => {
    return (
        <React.Fragment>
            {items.map(({ title, description, image, _id }) => {
                return (<a key={_id} onClick={() => onClick(_id)}><ListItem button={true} key={_id} id={_id}>
                    <ListItemIcon>
                        <ImageLoader
                            src={image}
                            className={classes.image} >
                            <img className={classes.image} alt={title} />
                            <div>Error!</div>
                            <Preloader image={placeholder} />
                        </ImageLoader>
                    </ListItemIcon>
                    <ListItemText primary={title} secondary={description} />
                </ListItem></a>);
            })}
        </React.Fragment>
    );
};

FilmsListItems.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(FilmsListItems);
