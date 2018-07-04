import { combineReducers } from 'redux';

import token from './token';
import error from './error';
import loading from './loading';
import success from './success';
import user from './user';
import message from './message';

const auth = combineReducers({
    token,
    error,
    loading,
    success,
    user,
    message
});

export default auth;

