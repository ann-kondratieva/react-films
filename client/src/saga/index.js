import { all, call, takeEvery, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import { stopSubmit } from 'redux-form';

import authSaga from '../modules/Auth/saga';
import api from '../services/api';
import makeRequest from '../services/makeRequest';
import userSelectors from '../modules/Auth/selectors';
import authHeader from '../services/authHeader';

export default function* rootSaga() {
    yield all([
        takeEvery((action) => _.endsWith(action.type, '_REQUEST'), watchRequest),
        authSaga()
    ]);
}

function* watchRequest(action) {
    try {
        const requestProperties = api[_.camelCase(action.type)](action.payload);
        if (requestProperties.headers.authorization === undefined) {
            const token = yield select(userSelectors.getToken);
            requestProperties.headers.authorization = authHeader(token);
        }
        const response = yield call(makeRequest, requestProperties);
        yield put({
            type: action.type.replace('_REQUEST', '_SUCCESS'),
            response: response ? response.data : {}
        });
    } catch (error) {
        if (error.response.status === 401) {
            yield put(stopSubmit(action.type.replace('_REQUEST', '_FORM'), { _error: error.response.statusText }));
        } else yield put({
            type: action.type.replace('_REQUEST', '_ERROR'),
            error: error.response.statusText
        });
    }
}