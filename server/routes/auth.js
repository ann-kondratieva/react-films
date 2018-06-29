import passport from 'passport';
import express from 'express';
import jwt from 'jsonwebtoken';

import { SECRET } from '../config/settings';
import getUserFromJWT from '../config/passport';
import User from '../model/user';

const router = express.Router();

getUserFromJWT(passport);

router.post('/register', function ({ body: { username, email, password } }, res) {
    if (!username || !password || !email) {
        res.status(401).json({ success: false, msg: 'Please pass username, email and password.' });
    } else {
        var newUser = new User({
            username,
            email,
            password
        });
        newUser.save(function (err) {
            if (err) {
                return res.status(401).json({ success: false, msg: 'User already exists.' });
            }
            var token = jwt.sign(newUser.toJSON(), SECRET);
            res.json({ success: true, token: token });
        });
    }
});

router.post('/login', function ({ body: { email, password } }, res) {
    User.findOne({
        email
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            user.comparePassword(password, function (err, isMatch) {
                if (isMatch && !err) {
                    var token = jwt.sign(user.toJSON(), SECRET);
                    res.json({ success: true, token: token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

export default router;