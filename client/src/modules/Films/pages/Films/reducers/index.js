import { combineReducers } from 'redux';

import error from './error';
import items from './items';
import loading from './loading';
import hasMore from './hasMore';

const films = combineReducers({
    error,
    items,
    loading,
    hasMore
});

export default films;