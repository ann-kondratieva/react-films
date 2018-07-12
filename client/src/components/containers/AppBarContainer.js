import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import userSelectors from '../../modules/Auth/selectors';
import authActionCreators from '../../modules/Auth/actions';
import AppBar from '../views/AppBar';

class AppBarContainer extends Component {

    constructor(props) {
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick() {
        const { authActions: { logout } } = this.props;
        logout();
    }

    render() {
        const { user: { username } } = this.props;
        const appBarProps = {
            username,
            onLogoutClick: this.onLogoutClick
        };
        return (
            <React.Fragment >
                <AppBar {...appBarProps} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch),
    };
}

AppBarContainer.propTypes = {
    authActions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer);