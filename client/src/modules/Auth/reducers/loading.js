import { handleActions } from 'redux-actions';

import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Login/actions';
import globalActionCreators from '../../../actions';

let initialState = false;

const loading = handleActions(
    {
        [loginActionCreators.loginRequest]: () => {
            return true;
        },
        [loginActionCreators.loginSuccess]: () => {
            return false;
        },
        [loginActionCreators.loginError]: () => {
            return false;
        },
        [registerActionCreators.registerRequest]: () => {
            return true;
        },
        [registerActionCreators.registerSuccess]: () => {
            return false;
        },
        [registerActionCreators.registerError]: () => {
            return false;
        },
        [globalActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default loading;