import { combineReducers } from 'redux';

import film from './film';
import gallery from '../components/Gallery/reducers';
import rating from '../components/Rating/reducers';

const filmDetails = combineReducers({
    film,
    gallery,
    rating
});

export default filmDetails;