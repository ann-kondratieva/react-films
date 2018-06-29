import { handleActions } from 'redux-actions';

import authActionCreators from '../../actions/auth';

let initialState = {};

const auth = handleActions(
    {
        [authActionCreators.loginRequest]: () => {
            return { loading: true };
        },
        [authActionCreators.loginSuccess]: (state, action) => {
            return action.payload;
        },
        [authActionCreators.loginError]: () => {
            return { error: true };
        },
        [authActionCreators.registerRequest]: () => {
            return { loading: true };
        },
        [authActionCreators.registerSuccess]: (state, action) => {
            return action.payload;
        },
        [authActionCreators.registerError]: () => {
            return { error: true };
        }
    },
    initialState
);

export default auth;