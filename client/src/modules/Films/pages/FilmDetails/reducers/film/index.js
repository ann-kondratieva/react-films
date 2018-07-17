import { combineReducers } from 'redux';

import error from './error';
import item from './item';
import loading from './loading';
import loadingRating from './loadingRating';

const film = combineReducers({
    error,
    item,
    loading,
    loadingRating,
});

export default film;