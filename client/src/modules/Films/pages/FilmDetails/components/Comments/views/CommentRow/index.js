import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Moment from 'react-moment';

const CommentRow = ({ comment }) => {
    return (
        <React.Fragment>
            <ListItem >
                <ListItemText>
                    <Grid container
                        alignItems="flex-start"
                        justify="space-around"
                    >
                        <Grid item xs={3}>
                            <Typography variant="body2">
                                {comment.userName}
                            </Typography>
                            <Typography variant="caption">
                                <Moment format="YYYY/MM/DD HH:mm">{comment.createdAt}</Moment>
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <div dangerouslySetInnerHTML={{ __html: comment.message }} />
                        </Grid>
                    </Grid>
                </ListItemText>
            </ListItem>
            <Divider />
        </React.Fragment >

    );
};

CommentRow.propTypes = {
    classes: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired
};

export default withStyles(styles)(CommentRow);