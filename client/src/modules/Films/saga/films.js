import { call, put, takeEvery } from 'redux-saga/effects';

import filmService from '../services/films';
import filmActionCreators from '../actions/films';

function* fetchFilms(action) {
    try {
        const films = yield call(filmService.getFilms, action.payload);
        yield put(filmActionCreators.getFilmsSuccess(films));
    } catch (error) {
        yield put(filmActionCreators.getFilmsError(error));
    }
}

function* filmSaga() {
    yield takeEvery(filmActionCreators.getFilmsRequest, fetchFilms);
}

export default filmSaga;