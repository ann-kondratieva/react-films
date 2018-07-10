import { takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { stopSubmit, startSubmit } from 'redux-form';

import loginActionCreators from '../actions';

function* redirectToMain() {
    yield put(stopSubmit('LOGIN_FORM', null));
    yield put(push('/'));
}

function* startSubmitting() {
    yield put(startSubmit('LOGIN_FORM'));
}

function* loginSaga() {
    yield all([
        takeEvery(loginActionCreators.loginSuccess, redirectToMain),
        takeEvery(loginActionCreators.loginRequest, startSubmitting),
    ]);
}

export default loginSaga;


