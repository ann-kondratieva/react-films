import { combineReducers } from 'redux';

import film from './film';
import gallery from '../components/Gallery/reducers';

const filmDetails = combineReducers({
    film,
    gallery
});

export default filmDetails;