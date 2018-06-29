import { combineReducers } from 'redux';

import auth from './auth';
import username from './username';

const user = combineReducers({
    auth,
    username
});

export default user;