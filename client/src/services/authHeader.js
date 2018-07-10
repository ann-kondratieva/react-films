export default function authHeader(token) {
    if (token) {
        return 'jwt ' + token;
    } else {
        return null;
    }
}
