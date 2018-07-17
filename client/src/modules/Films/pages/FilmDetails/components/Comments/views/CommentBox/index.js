import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';

import CommentForm from '../CommentForm';
import CommentRow from '../CommentRow';

const CommentBox = ({ film, classes, formProps }) => {
    return (
        <Grid container alignItems="center" justify="center"   >
            <Grid item xs={10} className={classes.container}>
                <Typography variant="caption" > {film.comments ? film.comments.length : '0'} comments</Typography>
                <List>
                    {film.comments ? film.comments.map((comment, index) =>
                        <CommentRow key={index} comment={comment} />
                    ) : ''}
                </List>
                <CommentForm {...formProps} />
            </Grid>
        </Grid>

    );
};

CommentBox.propTypes = {
    classes: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    formProps: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentBox);