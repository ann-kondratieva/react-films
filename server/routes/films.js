import express from 'express';

import Film from '../model/film';

var router = express.Router();

router.get('/', function (req, res, next) {
    /* Film.create({ title: 'Harry Potter', description: 'cool movie' }, function (err, post) {
        if (err) return next(err);
        console.log(post);
    }); */
    Film.find({}).exec(function (err, films) {
        if (err) return next(err);
        res.json(films);
    });
});

export default router;