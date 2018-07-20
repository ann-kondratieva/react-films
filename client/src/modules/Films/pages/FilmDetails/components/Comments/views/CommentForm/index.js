import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Loading from '../../../../../../../../views/Loading';
import RenderTinymceField from '../../../../../../../../views/RenderTinymceField';

const CommentForm = (props) => {
    const { handleSubmit, pristine, submitting, classes } = props;
    return (
        <form className={classes.container} onSubmit={handleSubmit}>
            <Grid item xs={12}  >
                <Field
                    className={classes.textField}
                    name="message"
                    component={RenderTinymceField}
                    margin="normal"
                    type="text"
                    label="Message"
                />
            </Grid>
            <Grid item xs={12}  >
                <Grid
                    className={classes.button}
                    container
                    alignItems="center"
                    justify="flex-start">
                    {submitting ?
                        <Grid
                            className={classes.loading}
                            container
                            alignItems="center"
                            justify="center"><Loading />
                        </Grid> :
                        <Button className={classes.button} type="submit"
                            variant="contained" color="primary" disabled={pristine || submitting}>
                            Send Comment
                        </Button>}
                </Grid>
            </Grid>
        </form>
    );
};

CommentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    error: PropTypes.string
};

export default reduxForm()(withStyles(styles)(CommentForm));