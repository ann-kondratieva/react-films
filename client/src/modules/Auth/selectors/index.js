const getToken = state => state.auth.token;
const getAuthSuccess = state => state.auth.success;
const getAuthData = state => state.auth;
const getUsername = state => state.auth.user.username;
const getUserData = state => state.auth.user;

const userSelectors = {
    getToken,
    getAuthSuccess,
    getAuthData,
    getUsername,
    getUserData
};

export default userSelectors;