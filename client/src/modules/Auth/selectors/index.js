const getToken = state => state.auth.token;
const getUser = state => state.auth.user;

const userSelectors = {
    getToken,
    getUser
};

export default userSelectors;