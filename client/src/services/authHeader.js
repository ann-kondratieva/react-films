export function authHeader() {
    let token = localStorage.getItem('jwtToken');
    if (token) {
        return { 'authorization': 'jwt ' + token };
    } else {
        return {};
    }
}