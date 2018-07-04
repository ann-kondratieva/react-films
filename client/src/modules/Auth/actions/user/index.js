import { createAction } from 'redux-actions';

const userActionCreators = {
    getUserRequest: createAction('GET_USER_REQUEST'),
    getUserSuccess: createAction('GET_USER_SUCCESS'),
    getUserError: createAction('GET_USER_ERROR'),

};

export default userActionCreators;