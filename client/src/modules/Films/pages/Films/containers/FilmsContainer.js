import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';

import filmsActionCreators from '../actions';
import filmSelectors from '../../../selectors/films';
import FilmsList from '../views/FilmsList';
import userSelectors from '../../../../Auth/selectors/index.js';
import globalActionCreators from '../../../../../actions';
import FilmsAppBar from '../views/AppBar';
import ServicesContainer from './ServicesContainer';
import ScrollUpButton from '../../../../../views/ScrollUpButton';
import { SEARCH_FORM } from '../constants';
import { SELECT_FORM } from '../constants';

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    onLogoutClick() {
        const { actions: { logout } } = this.props;
        logout();
    }

    loadMore() {
        const { filmsState: { loading, items }, selectValues, searchValues } = this.props;
        if (!loading) {
            const { filmActions } = this.props;
            const { getFilmsRequest } = filmActions;
            getFilmsRequest({
                start: items.length,
                end: items.length + 5,
                orderBy: selectValues ? selectValues.select : undefined,
                search: searchValues ? searchValues.search : undefined
            });
        }
    }

    render() {
        const { filmsState: { items, hasMore }, user: { username } } = this.props;
        const appBarProps = {
            username,
            onLogoutClick: this.onLogoutClick
        };
        return (
            <React.Fragment >
                <FilmsAppBar {...appBarProps} />
                <ServicesContainer />
                <FilmsList items={items} loadMore={this.loadMore} hasMore={hasMore} />
                <ScrollUpButton />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state),
        user: userSelectors.getUser(state),
        token: userSelectors.getToken(state),
        selectValues: getFormValues(SELECT_FORM)(state),
        searchValues: getFormValues(SEARCH_FORM)(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filmActions: bindActionCreators(filmsActionCreators, dispatch),
        actions: bindActionCreators(globalActionCreators, dispatch),
    };
}

FilmsContainer.propTypes = {
    filmActions: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    filmsState: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    selectValues: PropTypes.object,
    searchValues: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);