import { takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { stopSubmit, startSubmit } from 'redux-form';

import registerActionCreators from '../actions';

function* redirectToMain() {
    yield put(stopSubmit('REGISTER_FORM', null));
    yield put(push('/'));
}

function* startSubmitting() {
    yield put(startSubmit('REGISTER_FORM'));
}

function* registerSaga() {
    yield all([
        takeEvery(registerActionCreators.registerSuccess, redirectToMain),
        takeEvery(registerActionCreators.registerRequest, startSubmitting)
    ]);
}

export default registerSaga;