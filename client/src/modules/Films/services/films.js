import authHeader from '../../../services/authHeader';

function getFilms(token) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(token)
    };

    return fetch('/api/films', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.error);
    }
    return response.json();
}

const filmService = {
    getFilms
};

export default filmService;
