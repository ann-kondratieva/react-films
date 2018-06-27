import React from 'react';
import { Provider } from 'react-redux';

import NavigateRouter from '../NavigateRouter';

import store from '../../store';

const App = () => {
    return (
        <Provider store={store}>
            <NavigateRouter />
        </Provider>
    );
};

export default App;