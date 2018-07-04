import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userSelectors from '../../../modules/Auth/selectors/user';

const PrivateRouteContainer = ({ component: Component, location, token, ...rest }) => (
    <Route {...rest} render={props => (
        token
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: location } }} />
    )} />
);

PrivateRouteContainer.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    token: PropTypes.string
};

function mapStateToProps(state) {
    return {
        token: userSelectors.getToken(state)
    };
}

export default connect(mapStateToProps, null)(PrivateRouteContainer);

