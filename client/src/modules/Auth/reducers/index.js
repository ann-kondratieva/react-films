import { combineReducers } from 'redux';

import token from './token';
import user from './user';

const auth = combineReducers({
    token,
    user
});

export default auth;

