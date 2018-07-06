import { handleActions } from 'redux-actions';

import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Login/actions';
import globalActionCreators from '../../../actions';

let initialState = false;

const success = handleActions(
    {
        [loginActionCreators.loginSuccess]: () => {
            return true;
        },
        [registerActionCreators.registerSuccess]: () => {
            return true;
        },
        [globalActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default success;