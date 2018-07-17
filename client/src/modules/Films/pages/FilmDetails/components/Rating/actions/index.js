import { createAction } from 'redux-actions';

const ratingActionCreators = {
    updateFilmRatingRequest: createAction('UPDATE_FILM_RATING_REQUEST'),
    updateFilmRatingSuccess: createAction('UPDATE_FILM_RATING_SUCCESS'),
    updateFilmRatingError: createAction('UPDATE_FILM_RATING_ERROR'),
};

export default ratingActionCreators;