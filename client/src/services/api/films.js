export default {
    getFilmsRequest: () => {
        return {
            url: '/api/films',
            method: 'get',
            headers: {}
        };
    }
};