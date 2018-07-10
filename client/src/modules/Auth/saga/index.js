import { takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import globalActionCreators from '../../../actions';
import loginSaga from '../pages/Login/saga';
import registerSaga from '../pages/Register/saga';

function* redirectToLogin() {
    yield put(push('/login'));
}

function* authSaga() {
    yield all([
        loginSaga(),
        registerSaga(),
        takeEvery(globalActionCreators.logout, redirectToLogin),
    ]);
}

export default authSaga;