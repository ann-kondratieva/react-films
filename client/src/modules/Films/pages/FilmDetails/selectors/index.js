const getFilmState = state => state.films.filmDetails.film;
const getFilm = state => state.films.filmDetails.film.item;

export default {
    getFilmState,
    getFilm
};