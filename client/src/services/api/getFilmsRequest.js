import authHeader from '../authHeader';

export default function getFilmsRequest(payload) {
    return {
        url: '/api/films',
        method: 'get',
        headers: authHeader(payload)
    };
}