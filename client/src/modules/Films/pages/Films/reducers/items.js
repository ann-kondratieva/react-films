import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = [];

const items = handleActions(
    {
        [filmsActionCreators.getFilmsSuccess]: (state, action) => {
            return action.response.films;
        }
    },
    initialState
);

export default items;