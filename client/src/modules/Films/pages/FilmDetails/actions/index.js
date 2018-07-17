import { createAction } from 'redux-actions';

const filmActionCreators = {
    getFilmRequest: createAction('GET_FILM_REQUEST'),
    getFilmSuccess: createAction('GET_FILM_SUCCESS'),
    getFilmError: createAction('GET_FILM_ERROR'),
    updateFilmRatingRequest: createAction('UPDATE_FILM_RATING_REQUEST'),
    updateFilmRatingSuccess: createAction('UPDATE_FILM_RATING_SUCCESS'),
    updateFilmRatingError: createAction('UPDATE_FILM_RATING_ERROR'),
    openImage: createAction('OPEN_IMAGE'),
    closeImage: createAction('CLOSE_IMAGE'),
    updateFilmRequest: createAction('UPDATE_FILM_REQUEST'),
    updateFilmSuccess: createAction('UPDATE_FILM_SUCCESS'),
    updateFilmError: createAction('UPDATE_FILM_ERROR'),
};

export default filmActionCreators;