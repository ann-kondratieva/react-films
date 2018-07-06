import { handleActions } from 'redux-actions';

import globalActionCreators from '../../../../actions';

let initialState = '';

const username = handleActions(
    {
        [globalActionCreators.getUserRequest]: () => {
            return initialState;
        },
        [globalActionCreators.getUserSuccess]: (state, action) => {
            return action.response.username;
        },
        [globalActionCreators.getUserError]: (error) => {
            return error;
        },
        [globalActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default username;