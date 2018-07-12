import { takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import authActionCreators from '../actions';
import loginSaga from '../pages/Login/saga';
import registerSaga from '../pages/Register/saga';

function* redirectToLogin() {
    yield put(push('/login'));
}

function* authSaga() {
    yield all([
        loginSaga(),
        registerSaga(),
        takeEvery(authActionCreators.logout, redirectToLogin),
    ]);
}

export default authSaga;