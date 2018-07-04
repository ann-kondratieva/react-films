import { handleActions } from 'redux-actions';

import authActionCreators from '../actions/auth';

let initialState = false;

const loading = handleActions(
    {
        [authActionCreators.loginRequest]: () => {
            return true;
        },
        [authActionCreators.loginSuccess]: () => {
            return false;
        },
        [authActionCreators.loginError]: () => {
            return false;
        },
        [authActionCreators.registerRequest]: () => {
            return true;
        },
        [authActionCreators.registerSuccess]: () => {
            return false;
        },
        [authActionCreators.registerError]: () => {
            return false;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default loading;