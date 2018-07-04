import { createAction } from 'redux-actions';

const filmActionCreators = {
    getFilmsRequest: createAction('GET_FILMS_REQUEST'),
    getFilmsSuccess: createAction('GET_FILMS_SUCCESS'),
    getFilmsError: createAction('GET_FILMS_ERROR'),
};


export default filmActionCreators;