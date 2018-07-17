import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import filmActionCreators from '../actions';
import filmSelectors from '../selectors';
import Film from '../views/Film';
import userSelectors from '../../../../Auth/selectors';

class FilmDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.onStarClick = this.onStarClick.bind(this);
    }

    componentDidMount() {
        const { actions: { getFilmRequest } } = this.props;
        const id = this.props.match.params.id;
        getFilmRequest({ id });
    }

    onStarClick(value) {
        let { filmState: { item }, actions: { updateFilmRatingRequest }, user } = this.props;
        updateFilmRatingRequest({ userId: user._id, filmId: item._id, rating: value });
    }

    render() {
        const { filmState: { item, loading, loadingRating } } = this.props;
        const props = {
            film: item,
            loading,
            loadingRating,
            onStarClick: this.onStarClick
        };
        return (
            <React.Fragment >
                <Film {...props} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        filmState: filmSelectors.getFilmState(state),
        user: userSelectors.getUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch),
    };
}

FilmDetailsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    filmState: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetailsContainer));