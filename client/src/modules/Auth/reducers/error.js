import { handleActions } from 'redux-actions';

import authActionCreators from '../actions/auth';

let initialState = false;

const error = handleActions(
    {
        [authActionCreators.loginError]: () => {
            return true;
        },
        [authActionCreators.registerError]: () => {
            return true;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        },
        [authActionCreators.clearAuthData]: () => {
            return initialState;
        }
    },
    initialState
);

export default error;