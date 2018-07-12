import { takeEvery, all, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getFormValues } from 'redux-form';

import filmsActionCreators from '../actions';
import { FILMS_LIMIT, SERVICES_FORM } from '../constants';
import filmSelectors from '../selectors';

function* redirect(action) {
    yield put(push('/' + action.payload));
}

function* loadFilms() {
    const { getFilmsRequest } = filmsActionCreators;
    const formValues = yield select(getFormValues(SERVICES_FORM));
    const films = yield select(filmSelectors.getFilms);
    yield put(getFilmsRequest({
        start: films.length,
        end: films.length + FILMS_LIMIT,
        orderBy: formValues ? formValues.select : undefined,
        search: formValues ? formValues.search : undefined
    }));
}

function* getReadyToLoad() {
    const { setHasMore, clearFilms } = filmsActionCreators;
    yield put(setHasMore(true));
    yield put(clearFilms());
}

function* allFilmsSaga() {
    const { redirectToFilm, loadMoreFilms, applyFormChange } = filmsActionCreators;
    yield all([
        takeEvery(redirectToFilm, redirect),
        takeEvery(loadMoreFilms, loadFilms),
        takeEvery(applyFormChange, getReadyToLoad),
    ]);
}

export default allFilmsSaga;