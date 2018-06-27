import { createAction } from 'redux-actions';

import filmService from '../../services/films';

const filmActionCreators = {
    getFilms: getFilms,
    filmsRequest: createAction('GET_FILMS_REQUEST'),
    filmsSuccess: createAction('GET_FILMS_SUCCESS'),
    filmsError: createAction('GET_FILMS_ERROR'),

};

function getFilms() {
    return dispatch => {
        dispatch(filmActionCreators.filmsRequest());

        filmService.getFilms()
            .then(
                films => dispatch(filmActionCreators.filmsSuccess(films)),
                error => dispatch(filmActionCreators.filmsError(error))
            );
    };
}

export default filmActionCreators;