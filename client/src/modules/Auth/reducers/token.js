import { handleActions } from 'redux-actions';

import authActionCreators from '../actions/auth';

let initialState = '';

const token = handleActions(
    {
        [authActionCreators.loginSuccess]: (state, action) => {
            return action.payload.token;
        },
        [authActionCreators.registerSuccess]: (state, action) => {
            return action.payload.token;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default token;