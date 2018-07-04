import Film from '../model/film';

const getFilms = (req, res, next) => {
    const { headers: { authorization } } = req;
    const token = authorization;
    if (token) {
        Film.find({}).exec(function (err, films) {
            if (err) return next(err);
            res.json({ films });
        });
    } else {
        return res.status(403).send({ success: false, message: 'Unauthorized.' });
    }
};

export default getFilms;