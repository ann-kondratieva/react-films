import { handleActions } from 'redux-actions';

import userActionCreators from '../../actions/user';

let initialState = '';

const username = handleActions(
    {
        [userActionCreators.getUserRequest]: () => {
            return initialState;
        },
        [userActionCreators.getUserSuccess]: (state, action) => {
            console.log(action.payload);
            return action.payload.username;
        },
        [userActionCreators.getUserError]: (error) => {
            return error;
        }
    },
    initialState
);

export default username;