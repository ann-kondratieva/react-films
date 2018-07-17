export default {
    getFilmsRequest: (params) => {
        return {
            url: '/api/films',
            method: 'get',
            headers: {},
            params
        };
    },
    getFilmRequest: (params) => {
        return {
            url: '/api/film',
            method: 'get',
            headers: {},
            params
        };
    },
    updateFilmRatingRequest: (payload) => {
        return {
            url: '/api/film/rating',
            method: 'put',
            headers: {},
            data: payload
        };
    },
    updateFilmRequest: (payload) => {
        return {
            url: '/api/film',
            method: 'put',
            headers: {},
            data: payload
        };
    }
};