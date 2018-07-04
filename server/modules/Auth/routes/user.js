import express from 'express';
import passport from 'passport';

import getUserFromJWT from '../../../config/passport';
import authenticate from '../controllers/authenticate';
import getUser from '../controllers/getUser';

getUserFromJWT(passport);

const router = express.Router();

router.get('/', authenticate, getUser);

export default router; 