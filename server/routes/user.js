import express from 'express';
import passport from 'passport';

import getUserFromJWT from '../config/passport';

getUserFromJWT(passport);

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), function ({ headers: { authorization }, user }, res) {
    const token = authorization;
    if (token) {
        user.password = null;
        res.json(user);
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

export default router; 