import { call, put, takeEvery } from 'redux-saga/effects';

import userService from '../services/user';
import userActionCreators from '../actions/user';


function* fetchUser(action) {
    try {
        const user = yield call(userService.getUser, action.payload);
        yield put(userActionCreators.getUserSuccess(user));
    } catch (error) {
        yield put(userActionCreators.getUserError(error));
    }
}

function* userSaga() {
    yield takeEvery(userActionCreators.getUserRequest, fetchUser);
}

export default userSaga;