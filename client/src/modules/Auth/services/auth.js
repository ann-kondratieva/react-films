function login(authData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...authData })
    };

    return fetch('/api/auth/login', requestOptions).then(handleResponse);
}

function register(authData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...authData })
    };

    return fetch('/api/auth/register', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}

const authService = {
    login,
    register
};

export default authService;