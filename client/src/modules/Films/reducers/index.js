import { combineReducers } from 'redux';

import error from './error';
import items from './items';
import loading from './loading';

const films = combineReducers({
    error,
    items,
    loading
});

export default films;