/* global process */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import PrivateRoute from '../../modules/Auth/components/PrivateRoute';
import FilmsContainer from '../../modules/Films/pages/Films/containers/FilmsContainer';
import LoginContainer from '../../modules/Auth/pages/Login/containers/LoginContainer';
import RegisterContainer from '../../modules/Auth/pages/Register/containers/RegisterContainer';
import history from '../../services/history';

const NavigateRouter = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <PrivateRoute exact path={`${process.env.PUBLIC_URL}/`} component={FilmsContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/register`} component={RegisterContainer} />
            </Switch>
        </ConnectedRouter>
    );
};

export default NavigateRouter;