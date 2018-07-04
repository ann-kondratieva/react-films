import { call, put, takeEvery, all } from 'redux-saga/effects';

import authService from '../services/auth';
import authActionCreators from '../actions/auth';

function* login(action) {
    try {
        const authData = yield call(authService.login, action.payload);
        yield put(authActionCreators.loginSuccess(authData));
    } catch (error) {
        yield put(authActionCreators.loginError(error));
    }
}

function* register(action) {
    try {
        const authData = yield call(authService.register, action.payload);
        yield put(authActionCreators.registerSuccess(authData));
    } catch (error) {
        yield put(authActionCreators.registerError(error));
    }
}

function* authSaga() {
    yield all([
        takeEvery(authActionCreators.loginRequest, login),
        takeEvery(authActionCreators.registerRequest, register)
    ]);
}

export default authSaga;