import { createAction } from 'redux-actions';

const globalActionCreators = {
    logout: createAction('LOGOUT'),
    getUserRequest: createAction('GET_USER_REQUEST'),
    getUserSuccess: createAction('GET_USER_SUCCESS'),
    getUserError: createAction('GET_USER_ERROR')
};

export default globalActionCreators;