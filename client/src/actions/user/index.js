import { createAction } from 'redux-actions';

import userService from '../../services/user';

const userActionCreators = {
    getUser: getUser,
    getUserRequest: createAction('GET_USER_REQUEST'),
    getUserSuccess: createAction('GET_USER_SUCCESS'),
    getUserError: createAction('GET_USER_ERROR'),

};

function getUser() {
    return dispatch => {
        dispatch(userActionCreators.getUserRequest());

        userService.getUser()
            .then(
                user => dispatch(userActionCreators.getUserSuccess(user)),
                error => dispatch(userActionCreators.getUserError(error))
            );
    };
}

export default userActionCreators;