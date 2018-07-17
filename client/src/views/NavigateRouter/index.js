/* global process */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import PrivateRoute from '../../modules/Auth/components/PrivateRoute';
import Films from '../../modules/Films/pages/Films';
import LoginContainer from '../../modules/Auth/pages/Login/containers/LoginContainer';
import RegisterContainer from '../../modules/Auth/pages/Register/containers/RegisterContainer';
import history from '../../services/history';
import Film from '../../modules/Films/pages/FilmDetails';

const NavigateRouter = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <PrivateRoute exact path={`${process.env.PUBLIC_URL}/films`} component={Films} />
                <PrivateRoute exact path={`${process.env.PUBLIC_URL}/`} component={Films} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/register`} component={RegisterContainer} />
                <PrivateRoute exact path={`${process.env.PUBLIC_URL}/films/:id`} component={Film} />
            </Switch>
        </ConnectedRouter>
    );
};

export default NavigateRouter;