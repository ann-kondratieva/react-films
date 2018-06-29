import { authHeader } from './authHeader';

function getUser() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3001/api/user', requestOptions).then(handleResponse);
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