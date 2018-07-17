import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';

let initialState = false;

const loadingRating = handleActions(
    {
        [filmActionCreators.updateFilmRatingRequest]: () => {
            return true;
        },
        [filmActionCreators.updateFilmRatingSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default loadingRating;