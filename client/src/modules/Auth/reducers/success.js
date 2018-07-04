import { handleActions } from 'redux-actions';

import authActionCreators from '../actions/auth';

let initialState = false;

const success = handleActions(
    {
        [authActionCreators.loginSuccess]: () => {
            return true;
        },
        [authActionCreators.registerSuccess]: () => {
            return true;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default success;