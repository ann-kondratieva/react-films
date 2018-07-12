import { all } from 'redux-saga/effects';

import allFilmsSaga from '../pages/Films/saga';

function* filmsSaga() {
    yield all([
        allFilmsSaga()
    ]);
}

export default filmsSaga;