import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';

import rootSaga from '../saga';
import persistedReducer from '../reducers';
import history from '../services/history';

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routeMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

