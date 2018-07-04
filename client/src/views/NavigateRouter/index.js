/* global process */

import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PrivateRoute from '../../components/PrivateRoute';
import FilmsContainer from '../../modules/Films/pages/Films/containers/FilmsContainer';
import LoginContainer from '../../modules/Auth/pages/Login/containers/LoginContainer';
import RegisterContainer from '../../modules/Auth/pages/Register/containers/RegisterContainer';

const history = createBrowserHistory();

const NavigateRouter = () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <Switch>
                    <PrivateRoute exact path={`${process.env.PUBLIC_URL}/`} component={FilmsContainer} />
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginContainer} />
                    <Route exact path={`${process.env.PUBLIC_URL}/register`} component={RegisterContainer} />
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default NavigateRouter;