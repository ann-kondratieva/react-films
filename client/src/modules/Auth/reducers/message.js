import { handleActions } from 'redux-actions';

import authActionCreators from '../actions';
import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Login/actions';
import globalActionCreators from '../../../actions';

let initialState = '';

const message = handleActions(
    {
        [loginActionCreators.loginError]: (state, action) => {
            return action.error;
        },
        [registerActionCreators.registerError]: (state, action) => {
            return action.error;
        },
        [globalActionCreators.logout]: () => {
            return initialState;
        },
        [loginActionCreators.loginSuccess]: () => {
            return initialState;
        },
        [registerActionCreators.registerSuccess]: () => {
            return initialState;
        },
        [authActionCreators.clearAuthData]: () => {
            return initialState;
        }

    },
    initialState
);

export default message;