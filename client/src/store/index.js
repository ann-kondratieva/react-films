import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore} from 'redux-persist';
import rootSaga from '../saga';

import persistedReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

