const getFilms = state => state.films.items;
const getFilmsState = state => state.films;

const filmSelectors = {
    getFilms,
    getFilmsState
};

export default filmSelectors;