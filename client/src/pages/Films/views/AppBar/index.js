import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles';

const FilmsAppBar = ({ classes, username, onLogoutClick }) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Home
                    </Typography>
                    <Typography variant="title" color="inherit" /* className={classes.flex} */>
                        {username}
                    </Typography>
                    <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

FilmsAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    onLogoutClick: PropTypes.func.isRequired
};

export default withStyles(styles)(FilmsAppBar);