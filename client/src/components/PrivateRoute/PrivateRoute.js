import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, location, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('jwtToken')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: location } }} />
    )} />
);

PrivateRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object
};

export default PrivateRoute;

