import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';

import film from './film';

const rootReducer = combineReducers({
    film,
    //form: formReducer
});

export default rootReducer;