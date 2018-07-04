export default function authHeader(token) {
    if (token) {
        return { 'authorization': 'jwt ' + token };
    } else {
        return {};
    }
}
