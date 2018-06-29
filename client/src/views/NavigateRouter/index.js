/* global process */

import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import FilmsContainer from '../../pages/Films';
import LoginContainer from '../../pages/Login';
import PrivateRoute from '../../components/PrivateRoute';
import RegisterContainer from '../../pages/Register';

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