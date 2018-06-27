//import { authHeader } from '../helpers/auth-header';

function getFilms() {
    const requestOptions = {
        method: 'GET',
        //headers: authHeader()
    };

    return fetch('http://localhost:3001/api/films', requestOptions).then(handleResponse);
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
