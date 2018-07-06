import { createAction } from 'redux-actions';

const loginActionCreators = {
    loginRequest: createAction('LOGIN_REQUEST'),
    loginSuccess: createAction('LOGIN_SUCCESS'),
    loginError: createAction('LOGIN_ERROR')
};

export default loginActionCreators;