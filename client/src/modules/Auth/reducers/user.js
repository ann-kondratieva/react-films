import { handleActions } from 'redux-actions';

import authActionCreators from '../actions';

let initialState = {};

const user = handleActions(
    {
        [authActionCreators.getUserRequest]: () => {
            return initialState;
        },
        [authActionCreators.getUserSuccess]: (state, action) => {
            return action.response;
        },
        [authActionCreators.getUserError]: (error) => {
            return error;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default user;