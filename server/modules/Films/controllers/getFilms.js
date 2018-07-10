import Film from '../model/film';

const getFilms = async (req, res) => {
    const films = await Film.find({});
    res.json({ films });
};

export default getFilms;