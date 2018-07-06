export default function registerRequest(payload) {
    return {
        url: '/api/auth/register',
        method: 'post',
        data: payload,
        headers: { 'Content-Type': 'application/json' }
    };
}