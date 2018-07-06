import { all, call, takeEvery, put } from 'redux-saga/effects';
import camelCase from 'camelcase';

import authSaga from '../modules/Auth/saga';
import api from '../services/api';
import makeRequest from '../services/makeRequest';

export default function* rootSaga() {
    yield all([
        takeEvery((action) => {
            return action.type.endsWith('_REQUEST');
        }, watchRequest),
        call(authSaga)
    ]);
}

function* watchRequest(action) {
    try {
        const response = yield call(makeRequest, api[camelCase(action.type)](action.payload));
        yield put({
            type: action.type.replace('_REQUEST', '_SUCCESS'),
            response: response.data
        });
    } catch (error) {
        yield put({
            type: action.type.replace('_REQUEST', '_ERROR'),
            error: error.response.statusText
        });
    }
}