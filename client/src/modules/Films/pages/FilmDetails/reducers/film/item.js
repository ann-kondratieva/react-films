import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';
import ratingActionCreators from '../../components/Rating/actions';

let initialState = {};

const item = handleActions(
    {
        [filmActionCreators.getFilmSuccess]: (state, action) => {
            return action.response.film;
        },
        [ratingActionCreators.updateFilmRatingSuccess]: (state, action) => {
            return action.response.film;
        },
        [filmActionCreators.updateFilmSuccess]: (state, action) => {
            return action.response.film;
        }
    },
    initialState
);

export default item;