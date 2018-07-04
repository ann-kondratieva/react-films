import authHeader from '../../../services/authHeader';

function getUser(token) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(token)
    };

    return fetch('/api/user', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.error);
    }
    return response.json();
}

const userService = {
    getUser
};

export default userService;