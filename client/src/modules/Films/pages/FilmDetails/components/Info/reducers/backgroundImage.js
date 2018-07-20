import { handleActions } from 'redux-actions';

import infoActionCreators from '../actions';
import placeholder from '../../../../../../../output.svg';

let initialState = placeholder;

const backgroundImage = handleActions(
    {
        [infoActionCreators.setBackground]: (state, action) => {
            return action.payload;
        }
    },
    initialState
);

export default backgroundImage;