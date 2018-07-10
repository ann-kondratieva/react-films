import { handleActions } from 'redux-actions';

import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Register/actions';
import globalActionCreators from '../../../actions';

let initialState = null;

const token = handleActions(
    {
        [loginActionCreators.loginSuccess]: (state, action) => {
            return action.response.token;
        },
        [registerActionCreators.registerSuccess]: (state, action) => {
            return action.response.token;
        },
        [globalActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default token;