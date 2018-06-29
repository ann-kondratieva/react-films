import { createAction } from 'redux-actions';

import authService from '../../services/auth';

const authActionCreators = {
    login: login,
    loginRequest: createAction('LOGIN_REQUEST'),
    loginSuccess: createAction('LOGIN_SUCCESS'),
    loginError: createAction('LOGIN_ERROR'),
    register: register,
    registerRequest: createAction('REGISTER_REQUEST'),
    registerSuccess: createAction('REGISTER_SUCCESS'),
    registerError: createAction('REGISTER_ERROR'),

};

function login(email, password) {
    return dispatch => {
        dispatch(authActionCreators.loginRequest());

        authService.login(email, password)
            .then(
                user => dispatch(authActionCreators.loginSuccess(user)),
                error => dispatch(authActionCreators.loginError(error))
            );
    };
}

function register(username, email, password) {
    return dispatch => {
        dispatch(authActionCreators.registerRequest());

        authService.register(username, email, password)
            .then(
                user => dispatch(authActionCreators.registerSuccess(user)),
                error => {
                    console.log(error);
                    dispatch(authActionCreators.registerError(error));
                }
            );
    };
}

export default authActionCreators;