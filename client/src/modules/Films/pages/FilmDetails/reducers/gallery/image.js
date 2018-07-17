import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';

let initialState = '';

const image = handleActions(
    {
        [filmActionCreators.openImage]: (state, action) => {
            return action.payload;
        },
        [filmActionCreators.closeImage]: () => {
            return initialState;
        }
    },
    initialState
);

export default image;