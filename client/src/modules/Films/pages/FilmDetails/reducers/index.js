import { combineReducers } from 'redux';

import film from './film';
import gallery from '../components/Gallery/reducers';
import rating from '../components/Rating/reducers';
import info from '../components/Info/reducers';

const filmDetails = combineReducers({
    film,
    gallery,
    rating,
    info
});

export default filmDetails;