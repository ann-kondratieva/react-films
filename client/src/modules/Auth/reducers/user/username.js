import { handleActions } from 'redux-actions';

import userActionCreators from '../../actions/user';
import authActionCreators from '../../actions/auth';

let initialState = '';

const username = handleActions(
    {
        [userActionCreators.getUserRequest]: () => {
            return initialState;
        },
        [userActionCreators.getUserSuccess]: (state, action) => {
            return action.payload.username;
        },
        [userActionCreators.getUserError]: (error) => {
            return error;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default username;