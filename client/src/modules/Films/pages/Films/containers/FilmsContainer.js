import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmsActionCreators from '../actions';
import filmSelectors from '../../../selectors/films';
import FilmsList from '../views/FilmsList';
import userSelectors from '../../../../Auth/selectors/index.js';
import globalActionCreators from '../../../../../actions';
import FilmsAppBar from '../views/AppBar';
import ServicesContainer from './ServicesContainer';

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    componentDidMount() {
        const { filmActions, token } = this.props;
        const { getFilmsRequest } = filmActions;
        getFilmsRequest(token);
    }

    onLogoutClick() {
        const { actions: { logout } } = this.props;
        logout();
    }

    render() {
        const { filmsState: { loading, items }, user: { username } } = this.props;
        const appBarProps = {
            username,
            onLogoutClick: this.onLogoutClick
        };
        return (
            <React.Fragment >
                <FilmsAppBar {...appBarProps} />
                <ServicesContainer />
                <FilmsList loading={loading} items={items} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state),
        user: userSelectors.getUser(state),
        token: userSelectors.getToken(state)
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
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);