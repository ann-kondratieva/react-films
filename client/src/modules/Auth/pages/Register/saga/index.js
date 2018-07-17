import { takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { stopSubmit, startSubmit } from 'redux-form';

import registerActionCreators from '../actions';
import { REGISTER_FORM } from '../constants';

function* redirectToMain() {
    yield put(stopSubmit(REGISTER_FORM, null));
    yield put(push('/films'));
}

function* startSubmitting() {
    yield put(startSubmit(REGISTER_FORM));
}

function* registerSaga() {
    yield all([
        takeEvery(registerActionCreators.registerSuccess, redirectToMain),
        takeEvery(registerActionCreators.registerRequest, startSubmitting)
    ]);
}

export default registerSaga;