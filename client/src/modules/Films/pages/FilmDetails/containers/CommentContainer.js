import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import filmActionCreators from '../actions';
import { COMMENT_FORM } from '../constants';
import CommentBox from '../views/CommentBox';
import userSelectors from '../../../../Auth/selectors';

class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({ message }) {
        const { film, user, actions: { updateFilmRequest } } = this.props;
        let comment = {
            userId: user._id,
            userName: user.username,
            message,
            createdAt: new Date()
        };
        film.comments.push(comment);
        updateFilmRequest({ film });
    }

    render() {
        const { film } = this.props;
        const formProps = {
            onSubmit: this.handleSubmit,
            form: COMMENT_FORM
        };
        return (
            <React.Fragment >
                <CommentBox film={film} formProps={formProps} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch)
    };
}

CommentContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentContainer));