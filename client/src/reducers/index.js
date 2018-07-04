import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer as formReducer } from 'redux-form';

import films from '../modules/Films/reducers';
import auth from '../modules/Auth/reducers';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth','films', 'form']
};

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['message']
};
  
const rootReducer = combineReducers({
    films,
    auth: persistReducer(authPersistConfig, auth),
    form: formReducer
});

export default persistReducer(rootPersistConfig,rootReducer);