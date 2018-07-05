import Film from '../model/film';

const getFilms = async (req, res) => {
    const { headers: { authorization } } = req;
    const token = authorization;
    let films;
    try {
        if (token) {
            films = await Film.find({});
            res.json({ films });
        } else {
            res.statusMessage = 'Unauthorized.';
            return res.status(403).send();
        }
    } catch (error) {
        throw error;
    }
};

export default getFilms;