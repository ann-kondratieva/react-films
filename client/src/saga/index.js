import { all, call } from 'redux-saga/effects';

import userSaga from '../modules/Auth/saga/user';
import filmSaga from '../modules/Films/saga/films';
import authSaga from '../modules/Auth/saga/auth';

export default function* rootSaga() {
    yield all([
        call(userSaga),
        call(filmSaga),
        call(authSaga)
    ]);
}