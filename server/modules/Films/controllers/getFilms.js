import Film from '../model/film';

const getFilms = async (req, res) => {
    let { start, end, orderBy, search } = req.query;
    search = search ? search : '';
    const sortOrder = (orderBy === 'rating') ? -1 : 1;
    const searchOptions = { '$regex': search, '$options': 'i' };
    const films = await Film.find({ $or: [{ 'title': searchOptions }, { 'description': searchOptions }] }, null,
        { skip: Number.parseInt(start), limit: (end - start), sort: { [orderBy]: sortOrder } });
    res.json({ films });
};

export default getFilms;