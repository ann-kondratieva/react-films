import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './styles';

const FilmsAppBar = ({ classes, username, onLogoutClick }) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <Link to="/films" className={classes.home}>Home </Link>
                    </Typography>
                    <AccountCircle className={classes.accountIcon} />
                    <Typography color="inherit" variant='button' >
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