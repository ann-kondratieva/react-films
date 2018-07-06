import authHeader from '../authHeader';

export default function getUserRequest(payload) {
    return {
        url: '/api/user',
        method: 'get',
        headers: authHeader(payload)
    };
}