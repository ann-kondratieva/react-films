import { handleActions } from 'redux-actions';

import filmActionCreators from '../actions/films';

let initialState = false;

const error = handleActions(
    {
        [filmActionCreators.getFilmsError]: (state, action) => {
            return action.payload;
        }
    },
    initialState
);

export default error;