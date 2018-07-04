import { handleActions } from 'redux-actions';

import filmActionCreators from '../actions/films';

let initialState = false;

const loading = handleActions(
    {
        [filmActionCreators.getFilmsRequest]: () => {
            return true;
        },
        [filmActionCreators.getFilmsSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default loading;