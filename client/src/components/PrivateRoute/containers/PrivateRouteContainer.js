import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import userSelectors from '../../../modules/Auth/selectors';
import selectors from '../../../selectors';
import globalActionCreators from '../../../actions';

class PrivateRouteContainer extends Component {

    componentDidMount() {
        const { actions, isAuth, token } = this.props;
        const { getUserRequest } = actions;
        if (isAuth) {
            getUserRequest(token);
        }
    }

    render() {
        const { component: Component, location, isAuth, ...rest } = this.props;
        return (
            <Route {...rest} render={props => (
                isAuth
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            )} />
        );
    }

};

PrivateRouteContainer.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    token: PropTypes.string,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        isAuth: selectors.isAuth(state),
        token: userSelectors.getToken(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(globalActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouteContainer);

