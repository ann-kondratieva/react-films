import { takeEvery, all, put } from 'redux-saga/effects';
import { stopSubmit, startSubmit, reset } from 'redux-form';

import filmActionCreators from '../actions';
import { COMMENT_FORM } from '../constants';

function* stopSubmitting() {
    yield put(stopSubmit(COMMENT_FORM, null));
    yield put(reset(COMMENT_FORM));
}

function* startSubmitting() {
    yield put(startSubmit(COMMENT_FORM));
}

function* filmDetailsSaga() {
    yield all([
        takeEvery(filmActionCreators.updateFilmSuccess, stopSubmitting),
        takeEvery(filmActionCreators.updateFilmRequest, startSubmitting)
    ]);
}

export default filmDetailsSaga;