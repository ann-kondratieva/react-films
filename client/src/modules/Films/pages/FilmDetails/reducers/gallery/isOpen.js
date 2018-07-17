import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';

let initialState = false;

const isOpen = handleActions(
    {
        [filmActionCreators.openImage]: () => {
            return true;
        },
        [filmActionCreators.closeImage]: () => {
            return false;
        }
    },
    initialState
);

export default isOpen;