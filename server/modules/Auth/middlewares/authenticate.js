import passport from 'passport';

export const jwtAuthenticate = (req, res, next) => {
    passport.authenticate('jwt', { session: false })(req, res, next);
};

export const localAuthenticate = (req, res, next) => {
    return passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            res.statusMessage = info.message;
            return res.status(401).send();
        } else {
            req.user = user;
            return next();
        }
    })(req, res, next);
};


