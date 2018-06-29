import express from 'express';
import passport from 'passport';

import getUserFromJWT from '../config/passport';
import Film from '../model/film';

getUserFromJWT(passport);

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), function ({ headers: { authorization } }, res, next) {
    const token = authorization;
    if (token) {
        /* Film.create({ title: 'Harry Potter', description: 'cool movie' }, function (err, post) {
            if (err) return next(err);
            console.log(post);
        }); */
        Film.find({}).exec(function (err, films) {
            if (err) return next(err);
            res.json({ films });
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

export default router;