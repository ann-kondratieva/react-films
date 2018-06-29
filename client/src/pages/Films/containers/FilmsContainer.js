import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmActionCreators from '../../../actions/films';
import filmSelectors from '../../../selectors/films';
import FilmsList from '../views/FilmsList';
import userSelectors from '../../../selectors/user';
import userActionCreators from '../../../actions/user';
import FilmsAppBar from '../views/AppBar';

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    componentDidMount() {
        this.props.filmActions.getFilms();
        this.props.userActions.getUser();
    }

    onLogoutClick() {
        localStorage.removeItem('jwtToken');
        this.props.history.push('/login');
    }

    render() {
        const { films, username } = this.props;
        const props = {
            username,
            onLogoutClick: this.onLogoutClick
        };
        return (
            <React.Fragment >
                <FilmsAppBar {...props} />
                <FilmsList films={films} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    console.log(state);
    return {
        films: filmSelectors.getFilms(state),
        username: userSelectors.getUserName(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filmActions: bindActionCreators(filmActionCreators, dispatch),
        userActions: bindActionCreators(userActionCreators, dispatch)
    };
}

FilmsContainer.propTypes = {
    filmActions: PropTypes.object,
    userActions: PropTypes.object,
    films: PropTypes.object,
    username: PropTypes.string,
    history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);