export default function loginRequest(payload) {
    return {
        url: '/api/auth/login',
        method: 'post',
        data: payload,
        headers: { 'Content-Type': 'application/json' }
    };
}