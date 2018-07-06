import { createAction } from 'redux-actions';

const filmsActionCreators = {
    getFilmsRequest: createAction('GET_FILMS_REQUEST'),
    getFilmsSuccess: createAction('GET_FILMS_SUCCESS'),
    getFilmsError: createAction('GET_FILMS_ERROR'),
};

export default filmsActionCreators;