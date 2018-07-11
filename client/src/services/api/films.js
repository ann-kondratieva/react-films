export default {
    getFilmsRequest: (params) => {
        return {
            url: '/api/films',
            method: 'get',
            headers: {},
            params
        };
    }
};