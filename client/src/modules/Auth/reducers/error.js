import { handleActions } from 'redux-actions';

import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Login/actions';
import authActionCreators from '../actions';
import globalActionCreators from '../../../actions';

let initialState = false;

const error = handleActions(
    {
        [loginActionCreators.loginError]: () => {
            return true;
        },
        [registerActionCreators.registerError]: () => {
            return true;
        },
        [globalActionCreators.logout]: () => {
            return initialState;
        },
        [authActionCreators.clearAuthData]: () => {
            return initialState;
        }
    },
    initialState
);

export default error;