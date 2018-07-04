import { createAction } from 'redux-actions';

const authActionCreators = {
    loginRequest: createAction('LOGIN_REQUEST'),
    loginSuccess: createAction('LOGIN_SUCCESS'),
    loginError: createAction('LOGIN_ERROR'),
    registerRequest: createAction('REGISTER_REQUEST'),
    registerSuccess: createAction('REGISTER_SUCCESS'),
    registerError: createAction('REGISTER_ERROR'),
    logout: createAction('LOGOUT'),
    clearAuthData: createAction('CLEAR_AUTH_DATA')
};


export default authActionCreators;