import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';

import filmsActionCreators from '../actions';
import filmSelectors from '../selectors/index';
import FilmsList from '../views/FilmsList';
import { SERVICES_FORM } from '../constants';

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.onFilmClick = this.onFilmClick.bind(this);
    }

    onFilmClick(_id) {
        const { actions: { redirectToFilm } } = this.props;
        redirectToFilm(_id);
    }

    loadMore() {
        const { filmsState: { loading } } = this.props;
        if (!loading) {
            const { actions: { loadMoreFilms } } = this.props;
            loadMoreFilms();
        }
    }

    render() {
        const { filmsState: { items, hasMore } } = this.props;
        return (
            <FilmsList items={items} onClick={this.onFilmClick} loadMore={this.loadMore} hasMore={hasMore} />
        );
    }
};

function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state),
        formValues: getFormValues(SERVICES_FORM)(state)
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(filmsActionCreators, dispatch),
    };
}

FilmsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    filmsState: PropTypes.object.isRequired,
    formValues: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);