import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmActionCreators from '../../../actions/films';
import filmSelectors from '../../../selectors/films';
import FilmsList from '../views/FilmsList';
import userSelectors from '../../../../Auth/selectors/user';
import userActionCreators from '../../../../Auth/actions/user';
import authActionCreators from '../../../../Auth/actions/auth';
import FilmsAppBar from '../views/AppBar';
/* import { SEARCH_FORM } from '../../../constants/form';
import SearchForm from '../views/SearchForm'; */

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    componentDidMount() {
        const { filmActions, userActions, token } = this.props;
        const { getFilmsRequest } = filmActions;
        const { getUserRequest } = userActions;
        getFilmsRequest(token);
        getUserRequest(token);
    }

    onLogoutClick() {
        const { authActions: { logout }, history } = this.props;
        logout();
        history.push('/login');
    }

    onSearchSubmit({ search }) {
        console.log(search);
    }

    render() {
        const { filmsState: { loading, items }, username } = this.props;
        const appBarProps = {
            username,
            onLogoutClick: this.onLogoutClick
        };
        /*  const searchProps = {
            onSubmit: this.onSearchSubmit,
            form: SEARCH_FORM
        }; */
        return (
            <React.Fragment >
                <FilmsAppBar {...appBarProps} />
                {/* <SearchForm {...searchProps} /> */}
                <FilmsList loading={loading} items={items} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state),
        username: userSelectors.getUsername(state),
        token: userSelectors.getToken(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filmActions: bindActionCreators(filmActionCreators, dispatch),
        userActions: bindActionCreators(userActionCreators, dispatch),
        authActions: bindActionCreators(authActionCreators, dispatch),
    };
}

FilmsContainer.propTypes = {
    filmActions: PropTypes.object.isRequired,
    userActions: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    filmsState: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);