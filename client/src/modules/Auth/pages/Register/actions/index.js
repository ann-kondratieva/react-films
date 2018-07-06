import { createAction } from 'redux-actions';

const registerActionCreators = {
    registerRequest: createAction('REGISTER_REQUEST'),
    registerSuccess: createAction('REGISTER_SUCCESS'),
    registerError: createAction('REGISTER_ERROR')
};

export default registerActionCreators;