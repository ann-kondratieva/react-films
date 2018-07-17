import { combineReducers } from 'redux';

import film from './film';
import gallery from './gallery';

const filmDetails = combineReducers({
    film,
    gallery
});

export default filmDetails;