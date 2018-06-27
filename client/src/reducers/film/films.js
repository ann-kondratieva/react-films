import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions/films';

let initialState = {};

const films = handleActions(
    {
        [filmActionCreators.filmsRequest]: () => {
            return { loading: true };
        },
        [filmActionCreators.filmsSuccess]: (state, action) => {
            return { items: action.payload };
        },
        [filmActionCreators.filmsError]: () => {
            return { error: true };
        }
    },
    initialState
);

export default films;