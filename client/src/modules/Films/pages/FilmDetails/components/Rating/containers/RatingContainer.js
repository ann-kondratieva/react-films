import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import ratingActionCreators from '../actions';
import selectors from '../selectors';
import userSelectors from '../../../../../../Auth/selectors';
import Rating from '../views/Rating';

class FilmDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.onStarClick = this.onStarClick.bind(this);
    }

    onStarClick(value) {
        let { film, actions: { updateFilmRatingRequest }, user } = this.props;
        updateFilmRatingRequest({ userId: user._id, filmId: film._id, rating: value });
    }

    render() {
        const { film, ratingState: { isLoadingRating } } = this.props;
        const props = {
            rating: film.rating,
            isLoadingRating,
            onStarClick: this.onStarClick
        };
        return (
            <Rating {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        ratingState: selectors.getRatingState(state),
        user: userSelectors.getUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ratingActionCreators, dispatch),
    };
}

FilmDetailsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    ratingState: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetailsContainer));