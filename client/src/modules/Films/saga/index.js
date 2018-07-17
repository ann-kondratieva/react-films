import { all } from 'redux-saga/effects';

import allFilmsSaga from '../pages/Films/saga';
import filmDetailsSaga from '../pages/FilmDetails/saga';

function* filmsSaga() {
    yield all([
        allFilmsSaga(),
        filmDetailsSaga()
    ]);
}

export default filmsSaga;