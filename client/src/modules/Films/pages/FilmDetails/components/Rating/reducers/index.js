import { combineReducers } from 'redux';

import isLoadingRating from './isLoadingRating';

const rating = combineReducers({
    isLoadingRating
});

export default rating;