import { combineReducers } from 'redux';

import films from './films';

const film = combineReducers({
    films,
    //form: formReducer
});

export default film;