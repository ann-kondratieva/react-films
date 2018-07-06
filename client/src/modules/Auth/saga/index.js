import { takeEvery, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Register/actions';
import globalActionCreators from '../../../actions';
import { store } from '../../../store';

function* redirectToMain() {
    yield store.dispatch(push('/'));
}

function* redirectToLogin() {
    yield store.dispatch(push('/login'));
}

function* authSaga() {
    yield all([
        takeEvery(loginActionCreators.loginSuccess, redirectToMain),
        takeEvery(registerActionCreators.registerSuccess, redirectToMain),
        takeEvery(globalActionCreators.logout, redirectToLogin),
    ]);
}

export default authSaga;