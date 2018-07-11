import { createAction } from 'redux-actions';

const filmsActionCreators = {
    getFilmsRequest: createAction('GET_FILMS_REQUEST'),
    getFilmsSuccess: createAction('GET_FILMS_SUCCESS'),
    getFilmsError: createAction('GET_FILMS_ERROR'),
    clearFilms: createAction('CLEAR_FILMS'),
    setHasMore: createAction('SET_HAS_MORE')
};

export default filmsActionCreators;