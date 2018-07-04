import passport from 'passport';
import express from 'express';

import getUserFromJWT from '../../../config/passport';
import validateRegister from '../controllers/validation/validateRegister';
import validateLogin from '../controllers/validation/validateLogin';
import register from '../controllers/register';
import login from '../controllers/login';

const router = express.Router();

getUserFromJWT(passport);

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

export default router;