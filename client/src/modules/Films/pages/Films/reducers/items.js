import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = [];

const items = handleActions(
    {
        [filmsActionCreators.getFilmsSuccess]: (state, action) => {
            if (state !== []) {
                let resultState = state;
                resultState.push(...action.response.films);
                return resultState;
            } else return action.response.films;
        },
        [filmsActionCreators.clearFilms]: () => {
            console.log('clear');
            return [];
        }
    },
    initialState
);

export default items;