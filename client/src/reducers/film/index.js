import { combineReducers } from 'redux';

import films from './films';

const film = combineReducers({
    films
});

export default film;