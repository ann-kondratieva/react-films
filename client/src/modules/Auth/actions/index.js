import { createAction } from 'redux-actions';

const authActionCreators = {
    clearAuthData: createAction('CLEAR_AUTH_DATA')
};

export default authActionCreators;