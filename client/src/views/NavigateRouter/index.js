/* global process */

import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FilmsContainer from '../../pages/Films';

const history = createBrowserHistory();

const NavigateRouter = () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/films`} component={FilmsContainer} />
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default NavigateRouter;