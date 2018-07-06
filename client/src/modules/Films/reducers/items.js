import { handleActions } from 'redux-actions';

import filmsActionCreators from '../pages/Films/actions';

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