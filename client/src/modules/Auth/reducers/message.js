import { handleActions } from 'redux-actions';

import authActionCreators from '../actions/auth';

let initialState = '';

const message = handleActions(
    {
        [authActionCreators.loginError]: (state, action) => {
            return action.payload;
        },
        [authActionCreators.registerError]: (state, action) => {
            return action.payload;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        },
        [authActionCreators.loginSuccess]: () => {
            return initialState;
        },
        [authActionCreators.registerSuccess]: () => {
            return initialState;
        },
        [authActionCreators.clearAuthData]: () => {
            return initialState;
        }

    },
    initialState
);

export default message;