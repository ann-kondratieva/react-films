import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import film from './film';
import user from './user';

const rootReducer = combineReducers({
    film,
    user,
    form: formReducer
});

export default rootReducer;