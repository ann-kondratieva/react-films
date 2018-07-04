import { combineReducers } from 'redux';

import username from './username';

const user = combineReducers({
    username
});

export default user;