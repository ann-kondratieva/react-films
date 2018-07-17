import Film from '../model/film';

const getFilm = async (req, res) => {
    let { id } = req.query;
    const film = await Film.findOne({ '_id': id });
    res.json({ film });
};

export default getFilm;