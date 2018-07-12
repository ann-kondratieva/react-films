import Film from '../model/film';

/* for (let i = 0; i < 1; i++) {
    Film.create({
        title: 'Sherlock', description: i, image: 'https://picsum.photos/1000/800/?random', rating: 5
    }, function (err, post) {
        if (err) return (err);
    });
    Film.create({
        title: 'Lord of Rings', description: (i + 1), image: 'https://picsum.photos/1001/800/?random', rating: 4
    }, function (err, post) {
        if (err) return (err);
    });
    Film.create({
        title: 'Iron Man', description: (i + 2), image: 'https://picsum.photos/1002/800/?random', rating: 3
    }, function (err, post) {
        if (err) return (err);
    });
}
for (let i = 0; i < 4997; i++) {
    let x = Math.floor(Math.random() * 1000) + 300;
    let y = Math.floor(Math.random() * 700) + 200;
    Film.create({
        title: 'Sherlock', description: i, image: 'https://picsum.photos/' + x + '/' + y + '?random', rating: 2
    }, function (err, post) {
        if (err) return (err);
    });
}
 */
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