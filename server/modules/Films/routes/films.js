import express from 'express';
import passport from 'passport';

import getUserFromJWT from '../../../config/passport';
import authenticate from '../../Auth/controllers/authenticate';
import getFilms from '../controllers/getFilms';

getUserFromJWT(passport);

const router = express.Router();

router.get('/', authenticate, getFilms);

export default router;