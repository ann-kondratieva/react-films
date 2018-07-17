import { combineReducers } from 'redux';

import error from './error';
import items from './items';
import loading from './loading';
import hasMore from './hasMore';

const filmList = combineReducers({
    error,
    items,
    loading,
    hasMore
});

export default filmList;