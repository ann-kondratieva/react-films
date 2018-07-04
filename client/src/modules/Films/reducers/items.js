import { handleActions } from 'redux-actions';

import filmActionCreators from '../actions/films';

let initialState = [];

const items = handleActions(
    {
        [filmActionCreators.getFilmsSuccess]: (state, action) => {
            return action.payload.films;
        }
    },
    initialState
);

export default items;