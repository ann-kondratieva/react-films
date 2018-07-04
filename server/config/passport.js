import passportJwt from 'passport-jwt';

import User from '../modules/Auth/model/user';
import { SECRET } from './settings';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

export default function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = SECRET;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ _id: jwt_payload._id }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};