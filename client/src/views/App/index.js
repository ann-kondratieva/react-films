import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NavigateRouter from '../NavigateRouter';

import { store } from '../../store';
import { persistor } from '../../store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigateRouter />
            </PersistGate>
        </Provider>
    );
};

export default App;