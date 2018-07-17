import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';

const ImageDialog = ({ onClose, image, open, title, classes }) => {
    return (
        <Dialog onClose={onClose} open={open} >
            <img src={image} alt={title} className={classes.image} />
        </Dialog>

    );
};

ImageDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
};

export default withStyles(styles)(ImageDialog);