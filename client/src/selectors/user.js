const getAuthData = state => state.user.auth;
const getUserName = state => state.user.username;

const userSelectors = {
    getAuthData,
    getUserName
};

export default userSelectors;